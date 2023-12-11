import '@formkit/themes/genesis';
import {defineFormKitConfig} from '@formkit/vue';
import {genesisIcons} from '@formkit/icons';

export default defineFormKitConfig(() => {
    return {
        icons: {
            ...genesisIcons,
        },
    };
});
