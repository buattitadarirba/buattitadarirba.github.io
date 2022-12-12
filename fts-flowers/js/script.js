let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let doi;

if (url.searchParams.get('in') != null) {
  doi = url.searchParams.get('in');
} else {
  doi = "Ferris Tita Sabilillah";
}

let footer = document.getElementById("credit");
footer.innerHTML = doi;
footer.href = "https://www.instagram.com/ryandhikabaa/";

function time() {
  var d = new Date();
  var n = d.getHours();
  console.log(n);
  if (n >= 1 && n <= 10) {
    return "Pagi"
  } else if (n >= 10 && n <= 15) {
    return "Siang"
  } else if (n >= 15 && n <= 18) {
    return "Sore"
  } else if (n >= 18 && n <= 24) {
    return "Malam"
  }
}

function makan() {
  switch (time()) {
    case "Pagi":
      return "maem pagi"
      break;
    case "Siang":
      return "maem siang"
      break;
    case "Malam":
      return "maem malam"
      break;
    case "Sore":
      return "maem"
      break;
    default:
      break;
  }
}

function selesai() {
  const teks = document.getElementById('teks');
  const btn = document.querySelector('.tombol');
  teks.innerHTML = `Semangat ${doi} <i
  class="fas fa-heart text-danger animate__animated animate__heartBeat animate__repeat-3"></i>`;
  btn.classList.add('d-none');
  teks.classList.remove('d-none');
}


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire({
    title: 'Hai Sayangku cantikku tingtuutt maloppp 🤍🤍🤍!',
    html: `Selamat ${time()}, sayangkuu cintakuu malopp 🤍🤍`,
    timer: 3500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Sehatt sehatt yaa sayang akuu tingtuttt 🤍🤍').then((result) => {
        Swal.fire({
          title: ' ',
          html: `aku, dikaadikoo sayang kamuu, cintaa kamuuu tingtutt cancippp 🤍🤍`,
          timer: 4500,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `Miccccuuuuuuu sayang aku malopp 🤍🤍`,
              timer: 4500,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Sayang sayang aku mau kasih kamu sesuatuuu🤍').then((result) => {
                  Swal.fire(
                    'Ini kamu udah buka di hp belum?',
                    '',
                    'success'
                  ).then((result) => {
                    Swal.fire(
                      'kalau belum buka di hp ajaa yaa sayangkuu',
                      '',
                      'success'
                    ).then((result) => {
                      Swal.fire(
                        'di hp IP malah lebih cakep sayang',
                        '',
                        'success'
                      ).then((result) => {
                        Swal.fire(
                          'hayolooo aku mauu ngasihh apaaa',
                          '',
                          'success'
                        ).then((result) => {
                          Swal.fire(
                            'sayangkuu cantikku kepoo nii yaaa ???',
                            '',
                            'success'
                          ).then((result) => {
                            Swal.fire(
                              'ini bukan sembarangan lhoo sayangkuu, ini ada filosofinya, abis ini aku jelasin sayang🤍🤍',
                              '',
                              'success'
                            ).then((result) => {
                              Swal.fire(
                                'Mau doa duluuu sayangkuu cantikkuuu 🤍🤍',
                                '',
                                'success'
                              ).then((result) => {
                                Swal.fire(
                                  'dengan ini semoga kamuu sukaa yaa sayangkuu cantikku🤍🤍',
                                  '',
                                  'success'
                                ).then((result) => {
                                  Swal.fire(
                                    'diluaran sana udan banya banget yang modelan biasa sayang 🤍🤍',
                                    '',
                                    'success'
                                  ).then((result) => {
                                    Swal.fire(
                                      'ini aku custom buat kamuu sayangkuu cantikkuuu 🤍🤍',
                                      '',
                                      'success'
                                    ).then((result) => {
                                      Swal.fire(
                                        'semoga kamuu happyy yaa sayangkuu cantikkuu 🤍🤍',
                                        '',
                                        'success'
                                      ).then((result) => {
                                        Swal.fire(
                                          'akuu kangenn bangett sama kamuu sayangkuu cintakuuu🤍🤍',
                                          '',
                                          'success'
                                        ).then((result) => {
                                          Swal.fire(
                                            'ARGHHH KANGENNNNNN 🤍🤍',
                                            '',
                                            'success'
                                          ).then((result) => {
                                            Swal.fire(
                                              'Aku sayangg bangett sama kamuu cantikkuu tingtutt cancippp 🤍🤍',
                                              '',
                                              'success'
                                            ).then((result) => {
                                              Swal.fire(
                                                'ini filosodfinya sayangkuu cantikkuu, dimana akuu sengaja taruh bunganya di bagianku, karena apa ? 🤍🤍',
                                                '',
                                                'success'
                                              ).then((result) => {
                                                Swal.fire(
                                                  'Karena aku menjadi bagian mu dan menjadii bunga yang mendampingimu 🤍🤍 dan memberikan rasa aman,nyaman di kamu sayangkuu tingtuutt cancipp maaloppp 🤍🤍',
                                                  '',
                                                  'success'
                                                ).then((result) => {
                                                  Swal.fire(
                                                    'Habis ini klik okee sayangkuu cantikku 🤍🤍, MICCUUUU SAYANG AKUU LOPP🤍🤍🤍 AKUU SAYANG BANGETT SAMA KAMUU TINGTUTT 🤍🤍🤍',
                                                    '',
                                                    'success'
                                                  ).then((result) => {
                                                    window.location.replace("https://buattitadarirba.github.io/fts-flowers/flowerstingtut.html");
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