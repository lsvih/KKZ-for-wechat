<template>
  <p class="lsvih-divider">
    <slot></slot>
  </p>
</template>

<style>
.lsvih-divider {
  display: table;
  white-space: nowrap;
  height: auto;
  overflow: hidden;
  line-height: 1;
  text-align: center;
  padding: 10px 0;
  color: #fff;
}

.lsvih-divider:after,.lsvih-divider:before {
  content: '';
  display: table-cell;
  position: relative;
  top: 50%;
  width: 50%;
  background-repeat: repeat-x;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAACCAYAAABsfz2XAAAAAXNSR0IArs4c6QAAABVJREFUCB1j/P///yQGEgATCWrBSgFVsQOTynarTQAAAABJRU5ErkJggg==)
}

.lsvih-divider:before {
  background-position: right 1em top 50%;
  right:10px;
}

.lsvih-divider:after {
  background-position: left 1em top 50%;
  left:10px;
}
</style>
