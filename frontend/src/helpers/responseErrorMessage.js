export const createErrorMessage = (error) => {
    debugger
  let itemError;
  if (error.response.data.message.errors) {
    error.response.data.message.errors.forEach(({ msg }) => {
      itemError += `<li>${msg}.</li>`;
    });
    return `<ul >${itemError}.</ul>`;
  }
  return `<ul ><li>${error.response.data.message}</li></ul>`;
};
