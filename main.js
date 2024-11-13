// Bằng cách sử dụng .bind(document), bạn đang cố định giá trị của this là document, đảm bảo rằng bất kỳ lúc nào bạn gọi $() hay $$(), nó sẽ luôn tìm kiếm phần tử trong tài liệu HTML hiện tại.
// Điều này đặc biệt hữu ích khi bạn tạo ra các hàm tiện ích ngắn gọn để truy cập DOM, vì nó giúp tránh những lỗi tiềm ẩn.
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item')
const panes = $$('.tab-pane')
// console.log(tabs,panes)


const tabActive = $('.tab-item.active')
const line = $('.tabs > .line') // lấy con trực tiếp của thẻ cha
// console.log([line])

line.style.left = tabActive.offsetLeft + 'px'
line.style.width = tabActive.offsetWidth + 'px'

// const tabsItem = $('.tab-item.active')
// const tabsPane = $('.tab-pane.active')

// const updateActiveItems = () =>{ // -> phải sử dụng 1 hàm để cập nhập 
//     tabsItem = $('.tab-item.active')
//     tabsPane = $('.tab-pane.active')
// }

tabs.forEach((tab,index) => {
    const pane = panes[index]
    // console.log(tab,tabs)
    tab.onclick = function () {
        // console.log(this, 'index:', index)
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')
        // cách sử dụng biến tĩnh
        // updateActiveItems(); // -> sau mỗi vòng lặp sẽ cập nhập lại từ đầu 
        // tabsItem.classList.remove('active')
        // tabsPane.classList.remove('active')
        
        line.style.left = this.offsetLeft + 'px' // -> để là this hay tab đều đúng
        line.style.width = tab.offsetWidth + 'px' // -> để là this hay tab đều đúng

        this.classList.add('active')
        pane.classList.add('active')
        

        // phần này là cập nhập giá trị khi sử dụng biến tĩnh
        // tabsItem = this;
        // tabsPane = pane;
    }
})