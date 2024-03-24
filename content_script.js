// 等待Twitter页面加载完成
window.addEventListener('load', function() {
  console.log('addEventListener');

  var body = document.body;
  // body.style.backgroundColor = 'lightgray';
  body.style.backgroundColor = '#27458e';

  var particlesContainer = document.createElement('div');
  particlesContainer.id = 'particles-js';

  // particlesContainer.style.position = 'absolute';
  // particlesContainer.style.zIndex = '9999';
  // particlesContainer.style.width = '800px';
  // particlesContainer.style.height = '800px';
  particlesContainer.style.position = 'fixed'; // 使用fixed定位，使其覆盖整个视口
  particlesContainer.style.zIndex = '999'; // 设置较低的z-index，使其在内容下方
  particlesContainer.style.top = '0';
  particlesContainer.style.left = '0';
  particlesContainer.style.width = '100vw'; // 使用视口宽度单位
  particlesContainer.style.height = '100vh'; // 使用视口高度单位

  particlesContainer.style.backgroundColor = 'rgba(9, 29, 152, 0.5)'; 

  document.body.appendChild(particlesContainer);

  particlesJS('particles-js',
    
    {
      "particles": {
        "number": {
          "value": 308,
          "density": {
            "enable": true,
            "value_area": 868.0624057955
          }
        },
        "color": {
          "value": "#1258bb"
        },
        "shape": {
          "type": "triangle",
          "stroke": {
            "width": 1,
            "color": "#b39696"
          },
          "polygon": {
            "nb_sides": 4
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.42490419612936353,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 0.6496617698410762,
            "opacity_min": 0.07308694910712106,
            "sync": false
          }
        },
        "size": {
          "value": 0,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 29.234779642848423,
            "size_min": 5.684540486109416,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 112.2388442605866,
          "color": "#0045ff",
          "opacity": 0.42490419612936353,
          "width": 1.2827296486924182
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "top",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 481.0236182596568,
            "rotateY": 801.7060304327614
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#1875b6",
        // "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }

  );
  console.log('end*****');

});

// content_script.js

// // 确保DOM完全加载后执行
// document.addEventListener('DOMContentLoaded', function() {
//   console.log('yy is 55en'+ ' *');

//   // 创建粒子效果的容器
//   var particlesContainer = document.createElement('div');
//   particlesContainer.id = 'particles-js';
//   particlesContainer.style.position = 'absolute';
//   particlesContainer.style.zIndex = '-1'; // 确保粒子效果在内容之后
//   particlesContainer.style.width = '100%';
//   particlesContainer.style.height = '100%';
//   document.body.appendChild(particlesContainer);

//   console.log('yy is 55cn'+ ' *');

//   // 初始化particles.js
//   // particlesJS('particles-js', {
//   //   "particles": {
//   //     "number": {
//   //       "value": 80,
//   //       "density": {
//   //         "enable": true,
//   //         "value_area": 800
//   //       }
//   //     },
//   //     "color": {
//   //       "value": "#ffffff"
//   //     },
//   //     "shape": {
//   //       "type": "circle",
//   //       "stroke": {
//   //         "width": 0,
//   //         "color": "#000000"
//   //       },
//   //       "polygon": {
//   //         "nb_sides": 5
//   //       },
//   //       "image": {
//   //         "src": "img/github.svg",
//   //         "width": 100,
//   //         "height": 100
//   //       }
//   //     },
//   //     "opacity": {
//   //       "value": 0.5,
//   //       "random": false,
//   //       "anim": {
//   //         "enable": false,
//   //         "speed": 1,
//   //         "sync": false
//   //       }
//   //     },
//   //     "size": {
//   //       "value": 3,
//   //       "random": true,
//   //       "anim": {
//   //         "enable": false,
//   //         "speed": 40,
//   //         "sync": false
//   //       }
//   //     },
//   //     "line_linked": {
//   //       "enable": true,
//   //       "distance": 150,
//   //       "color": "#ffffff",
//   //       "opacity": 0.4,
//   //       "width": 1
//   //     },
//   //     "move": {
//   //       "enable": true,
//   //       "speed": 6,
//   //       "direction": "none",
//   //       "random": false,
//   //       "straight": false,
//   //       "out_mode": "out",
//   //       "bounce": false,
//   //       "attract": {
//   //         "enable": false,
//   //         "rotateX": 600,
//   //         "rotateY": 1200
//   //       }
//   //     }
//   //   },
//   //   "interactivity": {
//   //     "detect_on": "canvas",
//   //     "events": {
//   //       "onhover": {
//   //         "enable": true,
//   //         "mode": "repulse"
//   //       },
//   //       "onclick": {
//   //         "enable": true,
//   //         "mode": "push"
//   //       },
//   //       "resize": true
//   //     },
//   //     "modes": {
//   //       "grab": {
//   //         "distance": 400,
//   //         "line_linked": {
//   //           "opacity": 1
//   //         }
//   //       },
//   //       "bubble": {
//   //         "distance": 400,
//   //         "size": 40,
//   //         "duration": 2,
//   //         "opacity": 8,
//   //         "speed": 3
//   //       },
//   //       "repulse": {
//   //         "distance": 200,
//   //         "duration": 0.4
//   //       },
//   //       "push": {
//   //         "particles_nb": 4
//   //       },
//   //       "remove": {
//   //         "particles_nb": 2
//   //       }
//   //     }
//   //   },
//   //   "retina_detect": true
//   // });
// });
