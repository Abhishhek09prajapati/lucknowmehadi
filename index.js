


fetch('https://opensheet.elk.sh/1yqyPnBtwf6gUhOT3wFDk-FaQzSo6LfsnnDNm5WFZUE8/mehadi')
    .then(res => res.json())
    .then(data => {
        document.getElementsByClassName('logo')[0].innerText = `${data[0].TopicsValues}`
        document.getElementsByClassName('whatsappimg')[0].src = `./images/whatsapp.png`;

        var servicsCardd = document.getElementById('servcis1')

        data.forEach(servicsCard => {

            var numberprice = data.filter(e => e.price).length
            var slideimage = document.getElementById('sildeimg')

            var k = 0

            // RIGHT BUTTON (next)
            document.getElementById('rigthbtn').addEventListener('click', () => {

                k++

                if (k >= data.length) {
                    k = 0
                }
                slideimage.src = `./images/${data[k].images}`
            })


            // LEFT BUTTON (previous)
            document.getElementById('leftbtn').addEventListener('click', () => {
                k--
                if (k < 0) {
                    k = data.length - 1
                }
                slideimage.src = `./images/${data[k].images}`

            })
        });
    })

