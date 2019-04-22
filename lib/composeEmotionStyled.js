import styled from "@emotion/styled";

const createComposedEmotionStyled = (components, options) => {
  const { base = "div" } = options;
  const allSameEmotionBase = components.every(
    component => component.__emotion_base
  );
  if (!allSameEmotionBase) {
    throw new Error("All components being composed must use same base.");
  }

  const componentStyles = components.map(
    component => component.__emotion_styles
  );

  return styled(base)(componentStyles);
};

const composeEmotionStyled = (...args) => {
  if (Array.isArray(args[0])) {
    const [components, options] = args;
    return createComposedEmotionStyled(components, options);
  } else {
    return createComposedEmotionStyled(args);
  }
};
