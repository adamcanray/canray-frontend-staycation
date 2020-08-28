export default number => {
    /* Number Format with Internationalization Browser API (bawaan browser) */
    const formatNumbering = Intl.NumberFormat('id-ID')
    return formatNumbering.format(number)
  }