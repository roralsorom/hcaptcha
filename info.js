function printResult(result, value, hashed) {
    console.log('Result:', result, 'Value:', value, 'Hashed:', hashed);
}

function nig(e) {
    var n = e.width,
        t = e.height;
    // sourcery skip: flip-comparison
    return !(
        'CSS2Properties' in window &&
        'devicePixelRatio' in window &&
        1 !== devicePixelRatio ||
        matchMedia('(device-width: '.concat(n, 'px) and (device-height: ').concat(t, 'px)')).matches
    );
}

console.log('Hcaptchas Fingerprint Analysis Checker...');

// Window Dimension
printResult('Window Dimension', [window.screen.width, window.screen.height], false);

// Screen dimensions check
printResult('Screen dimensions check', nig(window.screen), false);

// Checking stuff
printResult(
    'Checking stuff',
    [
        window.screen.width,
        window.screen.height,
        window.screen.availWidth,
        window.screen.availHeight,
        window.screen.colorDepth,
        window.screen.pixelDepth,
        navigator.maxTouchPoints,
        window.devicePixelRatio,
    ],
    false
);

// Some sort of CSS Fingerprinting
printResult(
    'Some sort of CSS Fingerprinting',
    'Looks like some sort of CSS Fingerprinting (Firefox hash is not the same as the Chrome one)',
    true
);

// Don't really know how to explain this one
printResult('Don\'t really know how to explain this one', 'See script for more info', false);

// Some sort of CSS fingerprinting
printResult('Some sort of CSS fingerprinting', 'Some sort of CSS fingerprinting, return false on most browsers', false);

// Supported emojis (fingerprinting)
printResult('Supported emojis (fingerprinting)', 'Supported emojis (fingerprinting)', false);

// Some sort of CSS fingerprinting
printResult('Some sort of CSS fingerprinting', 'Some sort of CSS fingerprinting, return false on most browsers', false);

// CSS Properties list
printResult('CSS Properties list', 'CSS Properties list (hash is different across browsers but shared between devices)', true);

// Looks like some sort of CSS Fingerprinting
printResult(
    'Looks like some sort of CSS Fingerprinting',
    'Looks like some sort of CSS Fingerprinting (hash is different across browsers but shared between devices)',
    false
);

// Fonts but weird
printResult('Fonts but weird', '// TODO', false);

// Length of CSS properties
printResult('Length of CSS properties', 'Length of CSS properties', false);

// Object.getOwnPropertyNames(window)
printResult('Object.getOwnPropertyNames(window)', Object.getOwnPropertyNames(window), true);

// Length of Object.getOwnPropertyNames(window)
printResult('Length of Object.getOwnPropertyNames(window)', Object.getOwnPropertyNames(window).length, false);

// Supported media sources
printResult('Supported media sources', 'Supported media sources', true);

// User-Agent
printResult('User-Agent', navigator.userAgent, false);

// Checking navigator properties
printResult('Checking navigator properties', [navigator.language, navigator.languages, navigator.platform, navigator.oscpu], false);

// Checking device memory and hardware concurrency
printResult('Checking device memory and hardware concurrency', [navigator.deviceMemory, navigator.hardwareConcurrency], false);

// Firefox only purpose
printResult('Firefox only purpose', 'Firefox only. Purpose: ???', false);

// Getting high entropy values
printResult(
    'Getting high entropy values',
    navigator.userAgentData.getHighEntropyValues(['platform', 'platformVersion', 'model', 'bitness', 'architecture']),
    false
);

// Fonts installed on the system
printResult('Fonts installed on the system', [...document.fonts].map((font) => font.family), false);

// TimeZone
printResult('TimeZone', Intl.DateTimeFormat().resolvedOptions().timeZone, false);

//Some voices fingerprinting data
printResult(
    'Some voices fingerprinting data',
    Object.values(window.speechSynthesis.getVoices()).map(voice => ({
      default: voice.default,
      lang: voice.lang,
      localService: voice.localService,
      name: voice.name,
      voiceURI: voice.voiceURI
    })),
    true
  );
//Enabled voices name
printResult(
'Enabled voices name',
Object.values(window.speechSynthesis.getVoices()).filter(voice => voice.default).map(voice => voice.name),
false
);
//First enabled voice locale eg. "en-US"
printResult(
    'First enabled voice locale eg. "en-US"',
    Object.values(window.speechSynthesis.getVoices()).find(voice => voice.default).lang,
    false
  );
//rest of navigator stuff
//printResult('Navigator stuff', navigator, false)
//window stuff
//printResult('Navigator stuff', window, false)
