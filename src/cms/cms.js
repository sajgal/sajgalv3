import CMS from 'netlify-cms-app'

import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import PortfolioPreview from './preview-templates/PortfolioPreview'
// import { setupMediaLibrary } from './mediaLibrary';

// setupMediaLibrary();

CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('portfolio', PortfolioPreview)