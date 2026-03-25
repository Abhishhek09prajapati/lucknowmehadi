


fetch('https://opensheet.elk.sh/1yqyPnBtwf6gUhOT3wFDk-FaQzSo6LfsnnDNm5WFZUE8/mehadi')
    .then(res => res.json())
    .then(data => {
        document.getElementsByClassName('logo')[0].innerText = `${data[0].TopicsValues}`

        var servicsCardd = document.getElementById('servcis1')

        data.forEach(servicsCard => {

            var div = document.createElement('div')
            var image = document.createElement('img')
            var span = document.createElement('span')
            image.classList = "serrvicsimage"
            div.classList = "servicsdata"

            image.src = `./images/${servicsCard.images}`
            span.innerText = `${servicsCard.Servics} - Price:${servicsCard.Price} Upto`

            div.appendChild(image)
            div.appendChild(span)
            servicsCardd.appendChild(div)

            div.addEventListener('click', () => {

                let img = document.getElementsByClassName("serrvicsimage")[0].src
                let text = img
                let url = "https://wa.me/916387215755?text=" + encodeURIComponent(text)

                window.open(url, "_blank")


            })
        });



        var slideimage = document.getElementById('sildeimg')

        var i = 2
        let columnLength = Object.keys(data[0]).length

        setInterval(imageview, 1100)

        function imageview() {


            if (i > columnLength + 2) {
                i = 1
            }

            slideimage.src = `./images/${data[i].images}`

            i++
        }

        document.getElementsByClassName('whatsappimg')[0].src = `./image/whatsapp.png`;
        // window.open(`https://wa.me/${data[3].TopicsValues}`,"_blank") 


    })
