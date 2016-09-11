<template>
<div class="lsvih-line-btn" :style="style">
    <slot></slot>
</div>
</template>
<script>
export default {
    props: {
        color: {
            type: String,
            default: '#000'
        },
        height: {
            type: Number,
            default: 27
        },
        width: {
            type: Number,
            default: 71
        },
        borderRadius: {
            type: Number,
            default: 3
        },
        borderWidth: {
            type: Number,
            default: 1
        },
        fontSize: {
            type: Number,
            default: 18
        }
    },
    computed: {
        style() {
            return {
                borderColor: this.color,
                borderWidth: this.borderWidth + 'px',
                borderRadius: this.borderRadius + 'px',
                color: this.color,
                height: this.height + 'px',
                width: this.width + 'px',
                lineHeight: this.height + this.borderWidth + 'px',
                fontSize: this.fontSize + 'px',
            }
        }
    }
}
</script>
<style>
.lsvih-line-btn {
    border-style: solid;
    text-align: center;
}
</style>
