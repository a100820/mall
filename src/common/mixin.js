import { debounce } from "common/utils.js";


export const imageListenerMix = {
    data() {
        return {
            ietmImageListener: null,
        }
    },
    mouted() {
        // 防抖
        this.ietmImageListener = () => {
            // this.$refs.Scroll && this.$refs.Scroll.imageRefresh();
            refresh();
        };
        const refresh = debounce(this.$refs.Scroll.imageRefresh, 500);
        this.$bus.$on("ietmImageLoad", this.ietmImageListener);
    }
};

export const tabControlMixin = {
    data() {
        return {
            currentType: 'pop'
        }
    },
    methods: {
        tabClick(index) {
            switch (index) {
                case 0:
                    this.currentType = 'pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }
        }
    }
}