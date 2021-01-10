export const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element, current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s easy`
      current.style.opapcity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 }}
}
