<template>
  <div class="learn-center-list">
    <Header />
    <div class="center-part" v-if="windowWidth > 1050">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane v-for="item in tabs" :label="t(item.label)" :name="item.name">
        </el-tab-pane>
        <div class="min-height">
          <ListCenter :index="activeName" :toGetBlogs="toGetBlogs"/>
        </div>
      </el-tabs>
    </div>
    <div class="center-part" v-if="windowWidth <= 1050">
      <el-scrollbar>
        <div class="scrollbar-flex-content">
          <el-tabs
            v-model="activeName"
            class="demo-tabs"
            @tab-click="handleClick"
          >
            <!-- <el-tab-pane :label="t('messages.learnList.first_label')" name="first">
              <ListCenter :index="0" :toGetBlogs="toGetBlogs"/>
            </el-tab-pane> -->
            <el-tab-pane v-for="item in tabs" :label="t(item.label)" :name="item.name">
            </el-tab-pane>
            <ListCenter :index="activeName" :toGetBlogs="toGetBlogs"/>
          </el-tabs>
        </div>
      </el-scrollbar>
    </div>
    <Footer v-if="windowWidth > 769" />
    <FooterMobile v-if="windowWidth <= 769" />
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted, nextTick } from "vue";
import type { TabsPaneContext } from "element-plus";
import Header from "../../../layout/Header/Header.vue";
import Footer from "../../../layout/Footer/Footer.vue";
import FooterMobile from "../../../layout/Footer/FooterMobile.vue";
import ListCenter from "../component/ListCenter.vue";
import { useI18n } from 'vue-i18n'
import { Blog, GetBlogs } from "../../../models/blog";
import { getBlogs } from "../../../api/blog";
import {useRoute, useRouter} from 'vue-router';
const route: any = useRoute();
const router = useRouter();
const { t } = useI18n();

const windowWidth = ref(window.document.body.offsetWidth);
onMounted(() => {
  window.addEventListener("resize", resetWidth);
});
onUnmounted(() => {
  window.removeEventListener("resize", resetWidth);
});
function resetWidth() {
  windowWidth.value = window.document.body.offsetWidth;
}
const activeName = ref(0);
onMounted(() => {
  if(route.query && !isNaN(route.query.type)) {
    activeName.value = Number(route.query.type);
  }
})
const handleClick = (tab: TabsPaneContext, event: Event) => {
  nextTick(() => {
    router.push('/learnList?type=' + activeName.value);
  })
};

const tabs = [
  {label: 'messages.learnList.first_label', name: 0},
  {label: 'messages.learnList.second_label', name:1},
  {label: 'messages.learnList.third_label', name: 2},
  {label: 'messages.learnList.forth_label', name: 3},
  {label: 'messages.learnList.fifth_label', name: 4},
]


const blogs = ref<Blog[]>([]);

onMounted(async () => {
  try {
    const res: any = await getBlogs();
    const data: Blog[] = res.data;
    blogs.value = data;
    console.log(blogs.value)
  } catch(e) {
    console.log(e)
  }
})

const filterBlogs = (index: number) => {
  return blogs.value.filter((v: any) => v.type-1 === index);
}

const toGetBlogs = async (
  getConfig: GetBlogs
) => {
  try {
    const res: any = await getBlogs(getConfig);
    const content: any[] = res.data;
    const totalElements: number = res.data.totalElements || 100;
    return {
      content,
      totalElements
    }
  } catch(e) {
    console.log(e)
  }
}


</script>

<style scoped lang="scss">
.scrollbar-flex-content {
  display: flex;
}

.center-part {
  max-width: 1290px;
  min-height: 985px;
  margin: auto;
  padding: 45px 0 135px 0;
  position: relative;
  @media (max-width: 1440px) {
    & {
      padding: 25px 30px 135px 30px;
    }
  }
}
.min-height {
  min-height: 50px;
  @media (max-width: 769px) {
    & {
      margin-top: -20px;

    }
  }
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
:deep() {
  .el-tabs__item {
    color: #9b9b9b !important;
    font-size: 16px;
    line-height: 19px;
  }
  .el-tabs__item is-top {
    --el-menu-active-color: #01c19a;
    font-size: 16px;
    line-height: 19px;
  }
  .el-tabs__item.is-active {
    color: #01c19a !important;
    font-weight: 500;
  }
  .el-tabs__active-bar {
    background-color: #01c19a;
    height: 4px;
  }
  .el-scrollbar__bar.is-horizontal>div{
    height: 0; //iPhone滑动样式高度
  }
}

.content {
    margin-top: 23px;
    .image {
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .message {
      margin-top: 9px;
      color: #000000;
      line-height: 20px;
      font-weight: 500;
      @media (max-width: 769px) {
        text-align: center;
        font-weight: 400;
      }
    }
  }
  .to-article {
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  font-family: inherit;
}
</style>
