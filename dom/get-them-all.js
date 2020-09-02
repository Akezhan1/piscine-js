const getArchitects = () => [Array.from(document.getElementsByTagName('a'))].concat([Array.from(document.getElementsByTagName('span'))])

const getClassical = () => [Array.from(document.querySelectorAll('a.classical'))].concat([Array.from(document.querySelectorAll('a:not(.classical)'))])

const getActive = () => [Array.from(document.getElementsByClassName('classical active'))].concat([Array.from(document.querySelectorAll('.classical:not(.active)'))])

const getBonannoPisano = () => Array.from(document.querySelectorAll('#BonannoPisano')).concat([Array.from(document.querySelectorAll('a.classical.active:not(#BonannoPisano)'))])

export {getArchitects, getClassical, getActive, getBonannoPisano};
