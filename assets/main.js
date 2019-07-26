window.onload = function () {
    function spinSetence() {
        const sentences = [
            'Trên con đường thành công không có dấu chân của kẻ lười biếng... Vì tụi nó đi xe hết rồi :-s',
            'Đây là khóa học Lập trình Web',
            'Học phí 500k/ tháng',
            'Tích cực quay tay vận may sẽ đến',
        ]
        let randomPosition = Math.floor(Math.random() * sentences.length);
        return sentences[randomPosition]
    }
    const wrapper = document.getElementById('text-wrapper');
    setInterval(() => {
        let sentence = spinSetence();
        console.log(wrapper);
        wrapper.innerText = sentence;
    }, 3000)
}