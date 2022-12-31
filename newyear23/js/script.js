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
    title: 'Aloooo Sayang Tingtutt malopp 🤍🤍🤍!',
    html: `Selamat ${time()}, sayangkuu cintakuu lopp 🤍🤍`,
    timer: 3500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('ih kok polosan yaa sayang??, di klik aja deh yaa nantii adaa bagus kokk').then((result) => {
        Swal.fire({
          title: ' ',
          html: `aku, Ryandhika sayang kamuu, cintaa kamuuu tiitaatituuttt 🤍🤍`,
          timer: 2500,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `sayangku tingtutt malopp kangennn🤍🤍`,
              timer: 2500,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Sayangkuu malam tahun baru ini belum bisa main bareng yhah sayang ??, ini kamu baru main sama temenmuu yaa sayangkuu?? havefun sayang, jangan lupain akuu yaa sayangkuu 🤍🤍').then((result) => {
                  Swal.fire(
                    'ndapapa sayangkuu, next kita malam tahun baruan bareng yaa kesayangan akuu cantikkuuu 🤍🤍',
                    '',
                    'success'
                  ).then((result) => {
                    Swal.fire(
                      'Sayang maacii yaa sayang udah selalu support akuu🤍🤍',
                      '',
                      'success'
                    ).then((result) => {
                      Swal.fire(
                        'Im So Proud Of Youuu Sayangku tingutt kuu cantikkk🤍🤍',
                        '',
                        'success'
                      ).then((result) => {
                        Swal.fire(
                          'Oiya jangan bosen aku kirimin link ginian yaa',
                          '',
                          'success'
                        ).then((result) => {
                          Swal.fire(
                            'Sayang maacii yaa sayang udah selalu nguatin akuu🤍🤍',
                            '',
                            'success'
                          ).then((result) => {
                            Swal.fire(
                              'Kamu Pinter🤍, Kamu Cantikk🤍, Kamu Bisa🤍, Kamu Tangguhh🤍🤍',
                              '',
                              'success'
                            ).then((result) => {
                              Swal.fire(
                                'Sayang kamuu rumah akuu 🤍🤍',
                                '',
                                'success'
                              ).then((result) => {
                                Swal.fire(
                                  'Macci udaa selalu bikin akuu bahagiaa yaa sayangkuu tingtutt malopp🤍🤍',
                                  '',
                                  'success'
                                ).then((result) => {
                                  Swal.fire(
                                    'Kita berproses dan belajar bareng yaa tingtutt cantikk sayangkuu 🤍🤍',
                                    '',
                                    'success'
                                  ).then((result) => {
                                    Swal.fire(
                                      'Doa terbaik buat kamu yaa sayangkuu 🤍🤍, Sukses selaluu sayangkuu🤍🤍',
                                      '',
                                      'success'
                                    ).then((result) => {
                                      Swal.fire(
                                        'Akuu kangenn bangett sama kamuu 🤍🤍',
                                        '',
                                        'success'
                                      ).then((result) => {
                                        Swal.fire(
                                          'kamuu jaga kesehatan yaa sayangkuu🤍🤍',
                                          '',
                                          'success'
                                        ).then((result) => {
                                          Swal.fire(
                                            'akuu disini sama kamuu, ada buat kamuu sayangkuu tingtutt kuu🤍🤍',
                                            '',
                                            'success'
                                          ).then((result) => {
                                            Swal.fire(
                                              'Abiss UAS refreshh yukk sayang 🤍🤍',
                                              '',
                                              'success'
                                            ).then((result) => {
                                              Swal.fire(
                                                'kita muterr muterr, liatt citylight sama maem maem yaa sayang 🤍🤍',
                                                '',
                                                'success'
                                              ).then((result) => {
                                                Swal.fire(
                                                  'AKUU SAYANG KAMUU TIIITATIITUTT🤍🤍, MICCUUUU SAYANG AKUU LOPP🤍🤍🤍',
                                                  '',
                                                  'success'
                                                ).then((result) => {
                                                  Swal.fire(
                                                    'ndausah panjang panjangg, kitaa main liat kembang api bareng setelah kamu klik OK yaa sayangkuu',
                                                    '',
                                                    'success'
                                                  ).then((result) => {
                                                     window.location.href = "https://buattitadarirba.github.io/newyear23/newyear23.html";
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