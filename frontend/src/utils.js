export const getError = (err) => {
  console.log('err', err)
  if (err.response && err.response.data) {
    return err.response.data.message
  }
  return err.message
}
