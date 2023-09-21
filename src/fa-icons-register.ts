import { library } from '@fortawesome/fontawesome-svg-core'

import { 
    faFolder, 
    faFile, 
    faHardDrive
} from '@fortawesome/free-regular-svg-icons'

import { 
    faCaretDown,
    faTableColumns,
    faBarsStaggered,
} from '@fortawesome/free-solid-svg-icons'

/**
 * Register icons for system
 */


/**
 * Solid icons
 */

library.add(faCaretDown)
library.add(faTableColumns)
library.add(faBarsStaggered)


/**
 * Regular icons
 */

library.add(faFolder)
library.add(faFile)
library.add(faHardDrive)