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
    title: 'Hai Sayang Tiiitaatiitutt LOPPPP 🤍🤍🤍!',
    html: `Selamat ${time()}, sayangkuu cintakuu lopp 🤍🤍`,
    timer: 3500,
    timerProgressBar: true,
    showConfirmButton: false,
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      Swal.fire('Sehatt sehatt yaa sayang akuu tiitatiitutt 🤍🤍').then((result) => {
        Swal.fire({
          title: ' ',
          html: `aku, Ryandhika sayang kamuu, cintaa kamuuu tiitaatituuttt 🤍🤍`,
          timer: 4500,
          timerProgressBar: true,
          showConfirmButton: false,
        }).then((result) => {
          if (result.dismiss === Swal.DismissReason.timer) {
            Swal.fire({
              title: ' ',
              html: `Miccccuuuuuuu sayang aku lopp 🤍🤍`,
              timer: 4500,
              timerProgressBar: true,
              showConfirmButton: false,
            }).then((result) => {
              if (result.dismiss === Swal.DismissReason.timer) {
                Swal.fire('Cemungutt teruss yaa sayangkulopp🤍').then((result) => {
                  Swal.fire(
                    'Cemunguuttss UTS Semester 3 nyaa yaa sayang, Goodluck sayang aku 🤍',
                    '',
                    'success'
                  ).then((result) => {
                    Swal.fire(
                      'Cemunguuttss belajarnyaa, Jangan keseringan begadang yaa sayang akuu🤍🤍',
                      '',
                      'success'
                    ).then((result) => {
                      Swal.fire(
                        'Im So Proud Of Youuu Sayangku tiitaatiituutt🤍🤍',
                        '',
                        'success'
                      ).then((result) => {
                        Swal.fire(
                          'Oiya jangan bosen aku kirimin link ginian yaa',
                          '',
                          'success'
                        ).then((result) => {
                          Swal.fire(
                            'Semoga enggak ngeganggu kamu yaa sayang',
                            '',
                            'success'
                          ).then((result) => {
                            Swal.fire(
                              'Kamu Pinter🤍, Kamu Cantikk🤍, Kamu Bisa🤍, Kamu Tangguhh🤍🤍',
                              '',
                              'success'
                            ).then((result) => {
                              Swal.fire(
                                'Cumlaude AMIIN KENCENG YAA SAYANG 🤍🤍',
                                '',
                                'success'
                              ).then((result) => {
                                Swal.fire(
                                  'Have a nice dayyy !!',
                                  '',
                                  'success'
                                ).then((result) => {
                                  Swal.fire(
                                    'Sukses UTS Semester3 nyaaa yaa sayang 🤍🤍',
                                    '',
                                    'success'
                                  ).then((result) => {
                                    Swal.fire(
                                      'Doa terbaik buat kamu yaa',
                                      '',
                                      'success'
                                    ).then((result) => {
                                      Swal.fire(
                                        'Boleh banget lhohh contekannya xixixi!! 🤍🤍',
                                        '',
                                        'success'
                                      ).then((result) => {
                                        Swal.fire(
                                          'Apapun hasilnya nanti kita syukuri yaa sayang, aku tau kamu udaa usaha maksimal sayang 🤍🤍',
                                          '',
                                          'success'
                                        ).then((result) => {
                                          Swal.fire(
                                            'Jangan lupa berdoa yaa sayang 🤍🤍',
                                            '',
                                            'success'
                                          ).then((result) => {
                                            Swal.fire(
                                              'Abiss uts refreshh yukk sayang 🤍🤍',
                                              '',
                                              'success'
                                            ).then((result) => {
                                              Swal.fire(
                                                'kita muterr muterr, liatt citylight sama maem maem yaa sayang 🤍🤍',
                                                '',
                                                'success'
                                              ).then((result) => {
                                                Swal.fire(
                                                  'Doa Terbaik buat kamu sayang 🤍, Have a nice day yaa sayang aku🤍',
                                                  '',
                                                  'success'
                                                ).then((result) => {
                                                  Swal.fire(
                                                    'AKUU SAYANG KAMUU TIIITATIITUTT🤍🤍, MICCUUUU SAYANG AKUU LOPP🤍🤍🤍',
                                                    '',
                                                    'success'
                                                  ).then((result) => {
                                                    window.location.href = "file:///C:/Users/ryand/OneDrive/Documents/malop%20%F0%9F%A4%8D%F0%9F%A4%8D%F0%9F%A4%8D%F0%9F%A4%8D%F0%9F%A4%8D/buattitadarirba.github.io/flowers/index.html";
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