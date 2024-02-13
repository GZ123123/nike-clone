export const useViewport = (offset: number = 0) => {
  const container = ref<HTMLElement | null>(null);

  const location = ref<-1 | 0 | 1 | null>(null);

  const handleScroll = () => {
    if (!container.value) return;

    const { bottom, top } = container.value.getBoundingClientRect();

    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;

    if (bottom < offset) {
      location.value = 1;
    } else if (top > viewportHeight) {
      location.value = -1;
    } else {
      location.value = 0;
    }
  };

  onMounted(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return { container, location };
};
