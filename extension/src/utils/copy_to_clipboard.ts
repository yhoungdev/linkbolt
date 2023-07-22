import cogoToast from "cogo-toast";

export const copyToClipboard = (content: string) => {
  navigator.clipboard
    .writeText(content)
    .then((res) => cogoToast.success("Copied successfully"))
    .catch((err) => cogoToast.error("Failed to copy"));
};
