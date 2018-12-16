import ScrollAnim from 'rc-scroll-anim';

const iniciaScroll = () => {
    setTimeout(() => {
    ScrollAnim
    .scrollScreen
    .init({loop: false, duration: 0, ease: "easeInOutQuart", scrollInterval: 6000});
    }, 0);
}

export default iniciaScroll;