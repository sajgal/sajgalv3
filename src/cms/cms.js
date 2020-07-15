import CMS from 'netlify-cms-app'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import PortfolioPreview from './preview-templates/PortfolioPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import { setupMediaLibrary } from './mediaLibrary';

setupMediaLibrary();

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('portfolio', PortfolioPreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)