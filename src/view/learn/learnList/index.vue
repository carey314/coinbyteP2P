<template>
  <div class="learn-center-list">
    <Header />
    <div class="center-part" v-if="windowWidth > 1050">
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane v-for="item in tabs" :label="t(item.label)" :name="item.name">
        </el-tab-pane>
        <div class="min-height">
          <!-- <div v-if="loading" style="display: flex;justify-content: space-between;gap: 20px;">
            <div v-for="n in 4" :key="n" >
            <el-skeleton style="width: 100%;margin-top: 20px;" animated :loading="loading">
                <template #template>
                  <el-skeleton-item variant="image" style="width: 100%; height: 100%;min-height: 140px;" />
                  <div style="padding: 14px 0">
                    <el-skeleton-item variant="h3" style="width: 50%" />
                    <el-skeleton-item variant="text" />
                  </div>
                </template>
              </el-skeleton>
            </div>
          </div> -->
          <div v-if="activeName === 5" class="center-box-min">
            <el-row :gutter="20">
              <el-col :span="6" v-for="content in specialContent" :key="content.img">
                <a :href="content.url" style="text-decoration: none">
                  <div class="content clearfloat">
                    <div class="image">
                    <img :src="content.img" alt="Special Content Image" />
                  </div>
                  <div class="message">{{ content.title }}</div>
                  </div>
                </a>
              </el-col>
            </el-row>
          </div>
            <ListCenter :index="activeName" :toGetBlogs="toGetBlogs" v-else />
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
            <div v-if="activeName === 5" class="center-box-min">
              <el-row>
                <el-col :span="24" v-for="content in specialContent" :key="content.img">
                  <a :href="content.url" style="text-decoration: none">
                    <div class="content clearfloat">
                      <div class="image">
                        <img :src="content.img" alt="Special Content Image" />
                      </div>
                      <div class="message">{{ content.title }}</div>
                    </div>
                  </a>
                </el-col>
              </el-row>
            </div>
            <ListCenter :index="activeName" :toGetBlogs="toGetBlogs" v-else />
          </el-tabs>
        </div>
      </el-scrollbar>
    </div>
    <div >
      <Footer v-if="windowWidth > 769" />
      <FooterMobile v-if="windowWidth <= 769" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onUnmounted, onMounted, nextTick,watch } from "vue";
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

onUnmounted(() => {
  window.removeEventListener("resize", resetWidth);
});
function resetWidth() {
  windowWidth.value = window.document.body.offsetWidth;
}
const activeName = ref(0);
onMounted(async () => {
  window.addEventListener("resize", resetWidth);
  const routeType = route.query.type;
  if (routeType && !isNaN(routeType)) {
    activeName.value = Number(routeType);
  } else {
    activeName.value = 1; // 默认值，如果 URL 中没有 type 参数
  }

  if (activeName.value === 5) {
    fetchSpecialContent();
  } else {
    toGetBlogs({ type: activeName.value, limit: 12 });
  }
});
interface SpecialContent {
  img: string;
  title: string;
  url: string;
}

const specialContent = ref<SpecialContent[]>([]);

function fetchSpecialContent() {
  if (activeName.value === 5) {
    specialContent.value = [
      { 
        img: 'https://coinbytep2p-admin-static.s3.amazonaws.com/upload_file/learn_image01.png', 
        title: 'Terms and Conditions',
        url: 'https://www.coinbyte.exchange/centerContent/25'
      },
      { 
        img: 'https://coinbytep2p-admin-static.s3.amazonaws.com/upload_file/learn_image01.png', 
        title: 'Privacy Policy',
        url: 'https://www.coinbyte.exchange/centerContent/26'
      },
      { 
        img: 'https://coinbytep2p-admin-static.s3.amazonaws.com/upload_file/learn_image03.png', 
        title: 'AML Policy',
        url: 'https://www.coinbyte.exchange/centerContent/27'
      },
    ];
  } else {
    specialContent.value = [];
  }
}

const handleClick = (tab: TabsPaneContext, event: Event) => {
  const newActiveName = Number(tab.props.name);
  if (activeName.value !== newActiveName) {
    activeName.value = newActiveName;
    router.push({ path: '/au/learnList', query: { type: activeName.value.toString() } }).then(() => {
      specialContent.value = [];
      if (activeName.value === 5) {
        fetchSpecialContent();
      } else {
        toGetBlogs({ type: activeName.value, limit: 12 });
      }
      setTimeout(() => {
        window.location.reload();
      }, 100);
    });
  }
};

const tabs = [
  {label: 'messages.learnList.first_label', name: 1},
  {label: 'messages.learnList.second_label', name:2},
  {label: 'messages.learnList.third_label', name: 3},
  {label: 'messages.learnList.forth_label', name: 4},
  {label: 'messages.learnList.fifth_label', name: 5},
]


const blogs = ref<Blog[]>([]);

const loading = ref(true); 

const filterBlogs = (index: number) => {
  return blogs.value.filter((v: any) => v.type-1 === index);
}

const blogsData = ref<any>([]);
  
const toGetBlogs = async (
  getConfig: GetBlogs
) => {
  try {
    const res: any = await getBlogs(getConfig);
    const content: any[] = res.data;
    const totalElements: number = res.data.totalElements || 100;
    blogsData.value = content;
    loading.value = false; 
    return {
      content,
      totalElements
    }
  } catch(e) {
    console.log(e)
    loading.value = false; 
  }
}
</script>

<style scoped lang="scss">
.scrollbar-flex-content {
  display: flex;
  :deep(.el-tabs) {
    width: 100% !important;
  }
}

.center-part {
  max-width: 1290px;
  // min-height: 985px;
  margin: auto;
  padding: 45px 0 135px 0;
  position: relative;
  min-height: calc(100vh - 40px);

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
    --el-menu-active-color: #3e4191;
    font-size: 16px;
    line-height: 19px;
  }
  .el-tabs__item.is-active {
    color: #3e4191 !important;
    font-weight: 500;
  }
  .el-tabs__active-bar {
    background-color: #3e4191;
    height: 4px;
  }
  .el-scrollbar__bar.is-horizontal>div{
    height: 0; //iPhone滑动样式高度
  }
}

.content {
    .image {
      width: 100%; // 图片容器宽度为100%
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
.center-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; // 从左侧开始排列

  .content {
    width: 25%;

    .image {
      width: 307px; // 图片容器宽度为100%
      height: 169px; // 高度自适应

      img {
        width: 100%; // 图片宽度100%
        height: auto; // 图片高度自适应
        object-fit: cover; // 覆盖整个内容区域，可以改为 contain 保持图片比例
      }
    }

    .message {
      padding: 10px 0; // 添加一些内边距
      text-align: left;
    }
  }

  // 使用伪元素来确保四等分布局
  &::after {
    content: '';
    width: 25%;
  }

  @media (max-width: 769px) {
    .content {
      width: 50%; // 在较小屏幕上每行显示两个内容块
    }

    &::after {
      width: 50%; // 在较小屏幕上调整伪元素宽度
    }
  }
}
.center-box-min {
  display: flex;
  flex-direction: column; // 竖排显示
  align-items: center; // 居中对齐

  .content {
    width: 100%; // 每个内容块占据全部宽度
    margin-bottom: 20px; // 为内容块添加底部间隙

    .image {
      width: 100%; // 图片容器宽度为100%
      height: auto; // 图片高度自适应
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover; // 图片内容将被裁剪以适应容器大小
      }
    }

    .message {
      text-align: left; // 文本居中显示
      padding: 10px 0; // 添加一些内边距
      color: #000000;
      line-height: 20px;
      font-weight: 500;
    }
  }
}
</style>
