import classNames from "classnames";
import PropTypes from "prop-types";
import { buttonLinkPropTypes } from "utils/types";
import Link from "next/link";
import CustomLink from "./custom-link";

const ButtonContent = ({ button, appearance, compact }) => {
  return (
    <div
      className={classNames(
        // Common classes
        "block w-full lg:w-auto text-center uppercase transition duration-500 ease-in-out tracking-wide font-semibold text-base md:text-sm border-2 rounded-md",
        // Full-size button
        {
          "px-8 py-4": compact === false,
        },
        // Compact button
        {
          "px-6 py-2": compact === true,
        },
        // Specific to when the button is fully dark
        {
          "hover:bg-indigo-900 hover:border-indigo-900 bg-primary-600 text-white border-primary-600": appearance === "dark",
        },
        // Specific to when the button is dark outlines
        {
          "hover:bg-indigo-600 hover:border-indigo-600 hover:text-white text-primary-600 border-primary-600": appearance === "dark-outline",
        },
        // Specific to when the button is fully white
        {
          "hover:bg-indigo-600 hover:border-indigo-600 hover:text-white bg-white text-primary-600 border-white": appearance === "white",
        },
        // Specific to when the button is white outlines
        {
          "text-white hover:bg-indigo-600 hover:border-indigo-600 hover:text-white border-white": appearance === "white-outline",
        }
      )}
    >
      {button.text}
    </div>
  );
};

const ButtonLink = ({ button, appearance, compact = false }) => {
  if (button == null)  {
    button = "#"
  }
  return (
    <CustomLink link={button}>
      <ButtonContent button={button} appearance={appearance} compact={compact} />
    </CustomLink>
  );
};

ButtonLink.propTypes = {
  button: buttonLinkPropTypes,
  appearance: PropTypes.oneOf([
    "dark",
    "white-outline",
    "white",
    "dark-outline",
  ]),
  compact: PropTypes.bool,
};

export default ButtonLink;
