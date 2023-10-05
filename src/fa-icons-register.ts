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
    faMagnifyingGlass,
    faPlus,
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
library.add(faMagnifyingGlass)
library.add(faPlus)


/**
 * Regular icons
 */

library.add(faFolder)
library.add(faFile)
library.add(faHardDrive)