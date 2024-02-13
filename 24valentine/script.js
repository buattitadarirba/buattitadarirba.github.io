var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

function tampilJam() {
  var a_p = "";
  var hari = new Date();
  var jam_skr = hari.getHours();
  var menit_skr = hari.getMinutes();
  var detik_skr = hari.getSeconds();
  if (jam_skr < 12) {
    a_p = "AM";
  } else {
    a_p = "PM";
  }
  if (jam_skr == 0) {
    jam_skr = 12;
  }
  if (jam_skr > 12) {
    jam_skr = jam_skr - 12;
  }
  jam_skr = cekJam(jam_skr);
  menit_skr = cekJam(menit_skr);
  detik_skr = cekJam(detik_skr);
  document.getElementById('jam').innerHTML = jam_skr + ":" + menit_skr + ":" + detik_skr + " " + a_p;
}

function cekJam(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
setInterval(tampilJam, 100);

var canvas = document.getElementById('container');
var clone = document.getElementById('blurCanvasBottom');

var cloneCtx = clone.getContext('2d');
var ctx = canvas.getContext('2d');


var w = $('#blurCanvasTop').width();
var h = $('#blurCanvasTop').height();

var ww = $(window).width();
var wh = $(window).height();
canvas.width = ww;
canvas.height = wh;
var partCount = 100;
var particles = [];

function particle() {
  this.color = 'rgba(255,255,255,' + Math.random() + ')';
  console.log(this.color);
  this.x = randomInt(0, ww);
  this.y = randomInt(0, wh);
  this.direction = {
    "x": -1 + Math.random() * 2,
    "y": -1 + Math.random() * 2
  };
  this.vx = 0.3 * Math.random();
  this.vy = 0.3 * Math.random();
  this.radius = randomInt(2, 3);
  this.float = function () {
    this.x += this.vx * this.direction.x;
    this.y += this.vy * this.direction.y;
  };
  this.changeDirection = function (axis) {
    this.direction[axis] *= -1;
  };
  this.boundaryCheck = function () {
    if (this.x >= ww) {
      this.x = ww;
      this.changeDirection("x");
    } else if (this.x <= 0) {
      this.x = 0;
      this.changeDirection("x");
    }
    if (this.y >= wh) {
      this.y = wh;
      this.changeDirection("y");
    } else if (this.y <= 0) {
      this.y = 0;
      this.changeDirection("y");
    }
  };
  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  };
}
function clearCanvas() {
  cloneCtx.clearRect(0, 0, ww, wh);
  ctx.clearRect(0, 0, ww, wh);
}
function createParticles() {
  for (i = 0; i < partCount; i++) {
    var p = new particle();
    particles.push(p);
  }
}
function drawParticles() {
  for (i = 0; i < particles.length; i++) {
    p = particles[i];
    p.draw();
  }
}
function updateParticles() {
  for (var i = particles.length - 1; i >= 0; i--) {
    p = particles[i];
    p.float();
    p.boundaryCheck();
  }
}
createParticles();
drawParticles();
function animateParticles() {
  clearCanvas();
  drawParticles();
  updateParticles();
  cloneCtx.drawImage(canvas, 0, 0);
  requestAnimationFrame(animateParticles);
}
requestAnimationFrame(animateParticles);
cloneCtx.drawImage(canvas, 0, 0);

$(window).on('resize', function () {
  ww = $(window).width();
  wh = $(window).height();
  canvas.width = ww;
  canvas.height = wh;
  clearCanvas();
  particles = [];
  createParticles();
  drawParticles();
});
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function velocityInt(min, max) {
  return Math.random() * (max - min + 1) + min;
}

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 5 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: 'Aloww ndoro putriku cintaku cantiknyaa akoo 🤍❤️🤍!',
    html: `Selamat ${time()}, sayangkuu cintakuu lopp ❤️❤️`,
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
    closeOnClickOutside: false,
    closeClick: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Special RBA make with luvv too Ferris Titaa cayangg❤️❤️').then((result) => {
        Swal.fire({
          title: ' ',
          html: `Todeii 14 Feb 2024 kalo kata orangg ini harii spesial yaa sayang ?? 😏`,
          timer: 3000,
          timerProgressBar: true,
          showConfirmButton: false,
          closeOnClickOutside: false,
          closeClick: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `Emangg iyaa sayangg ????? 😏😏😏`,
              timer: 3000,
              timerProgressBar: true,
              showConfirmButton: false,
              closeOnClickOutside: false,
              closeClick: false,
              allowOutsideClick: false,
              allowEscapeKey: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Jadii ginii sayangg, kalau menurutkuu❤️').then((result) => {
                  Swal.fire(
                    'Semua hari aku sayang banget sama ndoro putriku cintakuu❤️',
                    '',
                    'success'
                  ).then((result) => {
                    Swal.fire(
                      'akuu sayang banget sama ndoro putriku cintaku sayangg❤️❤️',
                      '',
                      'success'
                    ).then((result) => {
                      Swal.fire(
                        'maaf yaa cantikk kalau mungkin mas sering bikin jengkel sayang 🤗❤️',
                        '',
                        'success'
                      ).then((result) => {
                        Swal.fire(
                          'Mas bangga dan bersyukur bisa mengenal seorang wanita sesempurna ndoro putri perris titaa',
                          '',
                          'success'
                        ).then((result) => {
                          Swal.fire(
                            'Terima kasih karena telah selalu ada saat aku senang dan susah yaa cintakuu ❤️❤️',
                            '',
                            'success'
                          ).then((result) => {
                            Swal.fire(
                              'Kamuu Keren❤️, Kamu Pinter❤️, Kamu Cantikk❤️, Kamu Bisa❤️, Kamu Tangguhh❤️❤️',
                              '',
                              'success'
                            ).then((result) => {
                              Swal.fire(
                                'bimbing mas untuk jadi versi nyaman aman dan mengayomi versi sayang yaa ❤️❤️',
                                '',
                                'success'
                              ).then((result) => {
                                Swal.fire(
                                  'Have a nice dayyy sayang !! ❤️❤️',
                                  '',
                                  'success'
                                ).then((result) => {
                                  Swal.fire(
                                    'Im So Proud of You Cah Ayu Perris Titoo ❤️❤️',
                                    '',
                                    'success'
                                  ).then((result) => {
                                    Swal.fire(
                                      'Doa terbaik buat kamu yaa sayang ❤️❤️',
                                      '',
                                      'success'
                                    ).then((result) => {
                                      Swal.fire(
                                        'Lovee UUUU SAYANGG cintakuu sak dimokk dimokk ❤️',
                                        '',
                                        'success'
                                      ).then((result) => {
                                        Swal.fire(
                                          'Groww bareng yaa sayangnyaa mas ❤️❤️',
                                          '',
                                          'success'
                                        ).then((result) => {
                                          Swal.fire(
                                            'Oiyaa sayangg, kalau tahun laluu sosweet bisaa ngasihh bungaa langsung yaa sayangku 😔😢',
                                            '',
                                            'success'
                                          ).then((result) => {
                                            Swal.fire(
                                              'maaf yaa cantikk, mungkin belum bisa ngasii bungaa di hari ini sayang, tapiiiii, tapii apaa?',
                                              '',
                                              'success'
                                            ).then((result) => {
                                              Swal.fire(
                                                'TAPIII, ku coba ngerancang sesuatuu buat sayangku cintakuu',
                                                '',
                                                'success'
                                              ).then((result) => {
                                                Swal.fire(
                                                  'Bukak terus step by step nyaa yaa cintakuu, cemogaa sukakk cintaku sayangg 🤗❤️',
                                                  '',
                                                  'success'
                                                ).then((result) => {
                                                  Swal.fire(
                                                    'MAS SAYANG KAMUU TIIITATIITUTT🤍❤️🤍, MICCUUUU SAYANGKU CINTAKU NDORO PUTRIKUU MALOPP🤍❤️🤍',
                                                    '',
                                                    'success'
                                                  ).then((result) => {
                                                    window.location.href = "https://buattitadarirba.github.io/24valentine/tium/index.html";
                                                  })
                                                })
                                              })
                                            })
                                          })
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                      // Swal.fire('Aku dukung kamu terus ko').then((result) => {
                      //   Swal.fire({
                      //     title: 'Oh iya aku mau nanya',
                      //     text: 'Ada sesuatu yang lagi kamu pingin ga?',
                      //     showDenyButton: true,
                      //     confirmButtonText: `Ada by`,
                      //     denyButtonText: `Ga ada ko`,
                      //   }).then((result) => {
                      //     /* Read more about isConfirmed, isDenied below */
                      //     if (result.isConfirmed) {
                      //       Swal.fire({
                      //         title: 'Mau apa?',
                      //         input: 'text',
                      //         inputPlaceholder: 'ex: Seblacc, boba, or etc',
                      //         showCancelButton: false,
                      //         inputValidator: (value) => {
                      //           if (!value) {
                      //             return 'Isi dulu dong by'
                      //           }
                      //         }
                      //       }).then((result) => {
                      //         Swal.fire('Okey by', 'Nanti aku kabulin kemauan kamu yaa', 'success').then((result) => {
                      //           Swal.fire("See ya! Aku kangen ^^").then((result) => {
                      //             selesai()
                      //           });
                      //         })
                      //       })
                      //     } else if (result.isDenied) {
                      //       Swal.fire('Oh okedeh kalo ga ada').then((result) => {
                      //         Swal.fire("See ya! Aku kangen ^^").then((result) => {
                      //           selesai()
                      //         });
                      //       })
                      //     }
                      //   })
                      // })
                    })
                  })
                })
              }
            })
          }
        })
      })
    }
  })
});