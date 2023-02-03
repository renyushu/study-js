import $ from "jquery"
export default {
    setH1(){
        // document.body.insertAdjacentHTML("beforeend", "<h1>你好！webpack</h1>")
        $("body").append("<h1>你好！webpack</h1>")
    },
    setH2(){
        document.body.insertAdjacentHTML("beforeend", "<h2>你好！webpack</h2>")
    }

}