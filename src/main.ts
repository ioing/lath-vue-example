import { createApp } from 'vue'
import App from './App.vue'
import { createApplication } from 'lath'

createApp(App).mount('#app')

/**
  * 生成 Lath 应用，Promise 成功后将返回应用对象 application
  * application 对象上挂在了常用 API， 比如 application.to 等
  * 更多请查看 https://lath.dev/
  * 解读1: home、tab2、tab3 等程序卡的视图已通过 <define-applet> 定义了，配置中无需再进行 source/render 等重复的配置了, 如果都定定义了则会叠加展示，比如 Tab1
  * 解读2: tab1 和其余几个 tab 不同的是，它采用了 source 来定义程序卡的视图，source 可以使用 src/html 两种模式，src 需要确保与入口页保持同域，否则一些功能受限，此时推荐使用 html 源码模式/跨域页面内引入 Lath 并开启 tunneling 模式。详细参考：https://lath.dev/?id=tunneling#doc
  */
createApplication({
  // applets 用以描述应用中的各个程序卡的特性，程序卡可自由命名，符合属性命名规范
  // 需要保证通过 <define-applet> 定义了的程序卡在此都有对应的配置，否则无法到达
  applets: {
    frameworks: {
      config: {
        index: 'home', // 指定首页为 id=home 的程序卡
        preIndex: 'home', // 如果通过 url 直接访问某个程序卡时，该参数能在历史中插入一个前置页
        level: 0,
        appSwitcher: true, // frameworks 的小彩蛋配置，动态载入一个控制器，通过 API 可以调用页面快速转场的快捷界面。
      },
    },
    home: {
      config: {
        title: 'home',
        free: false,
        color: '#101222',
        animation: false,
        disableSwipeModel: true
      }
    },
    tab1: {
      config: {
        title: 'tab1',
        disableSwipeModel: true,
        source: {
          // src: 'https://www.[same origin].com/tab1' 
          // html 为源码模式
          html: `
            <html>
              <body>
                <style>
                  html {
                    background: #007c32;
                  }
                  h1 {
                    width: 100%;
                    padding-top: 20vh;
                    text-align: center;
                    color: #fff;
                  }
                  p {
                    width: 100%;
                    text-align: center;
                    color: rgba(255, 255, 255, .5);
                  }
                </style>
                <h1>Tab1</h1>
                <p>这是一个视图为源码类型的程序卡</p>
              <body>
            </html>
          `
        },
        color: '#007c32',
        animation: false
      }
    },
    tab2: {
      config: {
        title: 'tab2',
        color: 'blue',
        disableSwipeModel: true,
        animation: false
      },
    },
    tab3: {
      config: {
        title: 'tab2',
        color: 'red',
        disableSwipeModel: true,
        animation: false
      },
    },
    slide1: {
      config: {
        title: 'Slide1',
        color: '#001656'
      },
    },
    slide2: {
      config: {
        title: 'Slide2',
        color: '#560000'
      },
    },
    slide3: {
      config: {
        title: 'Slide3',
        color: '#560000',
        source: {
          // src: 'https://www.[same origin].com/tab1' 
          // html 为源码模式
          html: `
            <html>
              <body>
                <style>
                  html {
                    background: #007c32;
                  }
                  h1 {
                    width: 100%;
                    padding-top: 20vh;
                    text-align: center;
                    color: #fff;
                  }
                  p {
                    width: 100%;
                    text-align: center;
                    color: rgba(255, 255, 255, .5);
                  }
                </style>
                <h1>Tab1</h1>
                <p>当前时间戳：<small id="time-box">-1</small></p>
                <p>定时器将在隐藏以及页面卡片横滑或执行窗口动画期间暂停或减缓</p>
                <script>
                  const timeBox = document.getElementById('time-box')
                  if (timeBox) {
                    setInterval(function () {
                      timeBox.innerText = Date.now();
                      console.log('定时器执行，窗口不可见时暂停')
                    }, 1000)
                  }
                </script>
              <body>
            </html>
          `
        },
      },
    },
    zoom: {
      config: {
        free: true,
        title: 'Zoom',
        color: '#760035',
        animation: 'zoom'
      },
    },
    flip: {
      config: {
        free: true,
        title: 'Flip',
        color: '#760035',
        animation: 'flip'
      },
    },
    slide: {
      config: {
        free: true,
        title: 'Slide',
        color: '#3a3574',
        animation: 'slide'
      },
    },
    sheet: {
      config: {
        free: true,
        title: 'Pop Sheet',
        color: '#01a97d',
        modality: 'sheet',
        sheetOptions: {
          top: '70px',
          maskClosable: true
        }
      },
    },
    slideTabGroup: {
      config: {
        title: 'Slide',
        color: 'red',
        free: true, // 全屏模式窗口。详细参考：https://lath.dev/?id=free#doc
        defaultSlideViewApplets: [
          {
            id: 'slide1',
            activate: 'instant'
          },
          {
            id: 'slide2',
            activate: 'instant'
          },
          {
            id: 'slide3',
            activate: 'instant'
          }
        ],
        animation: 'slide' // 动画类型，slide 也是窗口动画的默认值。详细参考：https://lath.dev/?id=presetEffect#doc
      },
    }
  }
}).then((application) => {
  // 成功创建时将返回 application 对象
  console.log('application', application)
  // @ts-ignore
  window.app = application
}).catch((e) => {
  // 创建失败将返回一些原因和错误信息
  // 开启 tunneling 时，且被父级 Lath 成功代理时也将进入
  console.log('未创建', e)
})