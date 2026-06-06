// @ts-nocheck
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * useMediaQuery
 * Reactive wrapper around window.matchMedia.
 *
 * @param {string} query - A valid CSS media query string
 * @returns {{ matches: Ref<boolean> }}
 *
 * @example
 * const { matches: isMobile } = useMediaQuery('(max-width: 768px)')
 * const { matches: prefersDark } = useMediaQuery('(prefers-color-scheme: dark)')
 * const { matches: isLandscape } = useMediaQuery('(orientation: landscape)')
 */
export function useMediaQuery(query) {
    const matches = ref(false)
    let mediaQuery = null

    function onChange(event) {
        matches.value = event.matches
    }

    onMounted(() => {
        mediaQuery = window.matchMedia(query)
        matches.value = mediaQuery.matches

        // Use the modern addEventListener API (with fallback for older browsers)
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', onChange)
        } else {
            mediaQuery.addListener(onChange) // deprecated but supported in older Safari
        }
    })

    onUnmounted(() => {
        if (!mediaQuery) return
        if (mediaQuery.removeEventListener) {
            mediaQuery.removeEventListener('change', onChange)
        } else {
            mediaQuery.removeListener(onChange)
        }
    })

    return { matches }
}

