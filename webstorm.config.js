// This is a workaround for JetBrains products
// to make them able to resolve webpack aliases
// and autocomplete paths;
// This file DO NOT make any impact on source code,
// it is only for editor;
// This file can be named as you wish, but have to be
// root of the project;
// See this issue: https://youtrack.jetbrains.com/issue/WEB-22717#comment=27-1558931

System.config({
  paths: {
    '@components/*': './source/components',
    '@framework/*': './source/framework',
    '@services/*': './source/services',
    '@root/*': './',
  }
});
