const settings: App.Settings = {
  currency: '$',
  basePath: process.env.NODE_ENV === 'production' ? '/webappshop' : '',
}

export default settings