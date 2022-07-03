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
    title: 'Hai Titaaaaa!',
    html: `Selamat ${time()}, Kamu udah ${makan()}?`,
    timer: 2500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Kalau belum jangan lupa maem yaa').then((result) => {
        Swal.fire({
          title: ' ',
          html: `kamu baru sibuk yhah, akhir akhir ini??`,
          timer: 2000,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `walau sibuk, jangan lupa jaga kesehatan yaa!!`,
              timer: 2000,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Semangat terus ya kamu :)').then((result) => {
                  Swal.fire(
                    'Mangatss UAS 2 nyaa yaa, Goodluck !!',
                    '',
                    'success'
                  ).then((result) => {
                    Swal.fire(
                      'Mangatss belajarnyaa, Jangan keseringan begadang yaa kamu',
                      '',
                      'success'
                    ).then((result) => {
                      Swal.fire(
                        'Im Proud Of Youuu',
                        '',
                        'success'
                      ).then((result) => {
                        Swal.fire(
                          'Oiya jangan bosen aku kirimin link ginian yaa',
                          '',
                          'success'
                        ).then((result) => {
                          Swal.fire(
                            'Semoga enggak ngeganggu kamu yaa',
                            '',
                            'success'
                          ).then((result) => {
                            Swal.fire(
                              'Pinter, Cantikk, Tangguhh !!!',
                              '',
                              'success'
                            ).then((result) => {
                              Swal.fire(
                                'Pokoknyaa cemungutt yaa',
                                '',
                                'success'
                              ).then((result) => {
                                Swal.fire(
                                  'Have a nice dayyy !!',
                                  '',
                                  'success'
                                ).then((result) => {
                                  Swal.fire(
                                    'Sukses UAS nyaaa',
                                    '',
                                    'success'
                                  ).then((result) => {
                                    Swal.fire(
                                      'Doa terbaik buat kamu yaa',
                                      '',
                                      'success'
                                    ).then((result) => {
                                      Swal.fire(
                                        'Boleh banget lhohh contekannya xixixi!!',
                                        '',
                                        'success'
                                      ).then((result) => {
                                        Swal.fire(
                                          'Oiya satu lagii',
                                          '',
                                          'success'
                                        ).then((result) => {
                                          Swal.fire(
                                            'I Really Miss U!!, yukk ditunggu yhah main barengnya',
                                            '',
                                            'success'
                                          ).then((result) => {
                                            Swal.fire(
                                              'ditunggu canda tawa barengnya',
                                              '',
                                              'success'
                                            ).then((result) => {
                                              Swal.fire(
                                                'kangen cerita cerita dan ndengerin cerita kamu hehe',
                                                '',
                                                'success'
                                              ).then((result) => {
                                                Swal.fire(
                                                  'kangen banget sama kalimat, tau ga, eh kak tau gaa, xixixi',
                                                  '',
                                                  'success'
                                                ).then((result) => {
                                                  Swal.fire(
                                                    'See Youu yaa cantikk!!',
                                                    '',
                                                    'success'
                                                  ).then((result) => {

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