var calLanguages = {
    ar: { // Arabic
      months: [
        '????? ??????', '????', '????', '?????', '????', '??????', '????', '??', '?????', '????? ?????', '????? ??????', '????? ?????'
      ],
      dayOfWeekShort: [
        '?', '?', '?', '?', '?', '?', '?'
      ],
      dayOfWeek: ['?????', '???????', '????????', '????????', '??????', '??????', '?????', '?????']
    },
    ro: { // Romanian
      months: [
        'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'
      ],
      dayOfWeekShort: [
        'Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'S?'
      ],
      dayOfWeek: ['Duminic?', 'Luni', 'Mar?i', 'Miercuri', 'Joi', 'Vineri', 'S?mb?t?']
    },
    id: { // Indonesian
      months: [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ],
      dayOfWeekShort: [
        'Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'
      ],
      dayOfWeek: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu']
    },
    is: { // Icelandic
      months: [
        'Jan��ar', 'Febr��ar', 'Mars', 'Apr��l', 'Ma��', 'J��n��', 'J��l��', '?g��st', 'September', 'Okt��ber', 'N��vember', 'Desember'
      ],
      dayOfWeekShort: [
        'Sun', 'M��n', '?ri?', 'Mi?', 'Fim', 'F?s', 'Lau'
      ],
      dayOfWeek: ['Sunnudagur', 'M��nudagur', '?ri?judagur', 'Mi?vikudagur', 'Fimmtudagur', 'F?studagur', 'Laugardagur']
    },
    bg: { // Bulgarian
      months: [
        '���ߧ�ѧ��', '���֧ӧ��ѧ��', '���ѧ��', '�����ڧ�', '���ѧ�', '���ߧ�', '���ݧ�', '���ӧԧ���', '���֧��֧ާӧ��', '���ܧ��ާӧ��', '����֧ާӧ��', '���֧ܧ֧ާӧ��'
      ],
      dayOfWeekShort: [
        '����', '����', '����', '����', '����', '����', '����'
      ],
      dayOfWeek: ['���֧է֧ݧ�', '����ߧ֧է֧ݧߧڧ�', '������ߧڧ�', '�����է�', '���֧�ӧ�����', '���֧���', '����ҧ���']
    },
    fa: { // Persian/Farsi
      months: [
        '???????', '????????', '?????', '???', '?????', '??????', '???', '????', '???', '??', '????', '?????'
      ],
      dayOfWeekShort: [
        '??????', '??????', '?? ????', '????????', '???????', '????', '????'
      ],
      dayOfWeek: ['???????', '??????', '???????', '????????', '????????', '????', '????', '???????']
    },
    ru: { // Russian
      months: [
        '���ߧӧѧ��', '���֧ӧ�ѧݧ�', '���ѧ��', '�����֧ݧ�', '���ѧ�', '����ߧ�', '����ݧ�', '���ӧԧ���', '���֧ߧ��ҧ��', '���ܧ��ҧ��', '�����ҧ��', '���֧ܧѧҧ��'
      ],
      dayOfWeekShort: [
        '����', '����', '����', '����', '����', '����', '����'
      ],
      dayOfWeek: ['�����ܧ�֧�֧ߧ��', '����ߧ֧է֧ݧ�ߧڧ�', '������ߧڧ�', '����֧է�', '���֧�ӧ֧��', '�����ߧڧ��', '����ҧҧ���']
    },
    uk: { // Ukrainian
      months: [
        '��?��֧ߧ�', '�����ڧ�', '���֧�֧٧֧ߧ�', '����?��֧ߧ�', '����ѧӧ֧ߧ�', '���֧�ӧ֧ߧ�', '���ڧ�֧ߧ�', '���֧��֧ߧ�', '���֧�֧�֧ߧ�', '����ӧ�֧ߧ�', '���ڧ����ѧ�', '�����է֧ߧ�'
      ],
      dayOfWeekShort: [
        '���է�', '���ߧ�', '�����', '�����', '�����', '�����', '���ҧ�'
      ],
      dayOfWeek: ['���֧�?�ݧ�', '����ߧ֧�?�ݧ��', '��?�ӧ�����', '���֧�֧է�', '���֧�ӧ֧�', '��\'���ߧڧ��', '����ҧ���']
    },
    en: { // English
      months: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ],
      dayOfWeekShort: [
        'S', 'M', 'T', 'W', 'T', 'F', 'S'
      ],
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      postsMonthTip: 'Posts published in LMM yyyy',
      titleFormat: 'LMM yyyy'
    },
    el: { // ���˦˦Ǧͦɦ�?
      months: [
        '�����ͦϦ�?�Ѧɦ�?', '���Ŧ¦ѦϦ�?�Ѧɦ�?', '��?�ѦӦɦ�?', '���Ц�?�˦ɦ�?', '��?�ɦ�?', '����?�ͦɦ�?', '����?�˦ɦ�?', '��?�æϦԦҦӦ�?', '���ŦЦ�?�̦¦Ѧɦ�?', '���ʦ�?�¦Ѧɦ�?', '����?�̦¦Ѧɦ�?', '���Ŧ�?�̦¦Ѧɦ�?'
      ],
      dayOfWeekShort: [
        '���Ԧ�', '���Ŧ�', '���Ѧ�', '���Ŧ�', '���Ŧ�', '������', '������'
      ],
      dayOfWeek: ['���ԦѦɦ���?', '���ŦԦ�?�Ѧ�', '����?�Ӧ�', '���Ŧ�?�ѦӦ�', '��?�̦ЦӦ�', '�����Ѧ��ҦʦŦ�?', '��?�¦¦��Ӧ�']
    },
    de: { // German
      months: [
        'Januar', 'Februar', 'M?rz', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
      ],
      dayOfWeekShort: [
        'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'
      ],
      dayOfWeek: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag']
    },
    nl: { // Dutch
      months: [
        'januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'
      ],
      dayOfWeekShort: [
        'zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'
      ],
      dayOfWeek: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag']
    },
    tr: { // Turkish
      months: [
        'Ocak', '?ubat', 'Mart', 'Nisan', 'May?s', 'Haziran', 'Temmuz', 'A?ustos', 'Eyl��l', 'Ekim', 'Kas?m', 'Aral?k'
      ],
      dayOfWeekShort: [
        'Paz', 'Pts', 'Sal', '?ar', 'Per', 'Cum', 'Cts'
      ],
      dayOfWeek: ['Pazar', 'Pazartesi', 'Sal?', '?ar?amba', 'Per?embe', 'Cuma', 'Cumartesi']
    },
    fr: { //French
      months: [
        'Janvier', 'F��vrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Ao?t', 'Septembre', 'Octobre', 'Novembre', 'D��cembre'
      ],
      dayOfWeekShort: [
        'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'
      ],
      dayOfWeek: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi']
    },
    es: { // Spanish
      months: [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
      ],
      dayOfWeekShort: [
        'Dom', 'Lun', 'Mar', 'Mi��', 'Jue', 'Vie', 'S��b'
      ],
      dayOfWeek: ['Domingo', 'Lunes', 'Martes', 'Mi��rcoles', 'Jueves', 'Viernes', 'S��bado']
    },
    th: { // Thai
      months: [
        '??????', '??????????', '??????', '??????', '???????', '????????', '???????', '???????', '???????', '??????', '?????????', '???????'
      ],
      dayOfWeekShort: [
        '??.', '?.', '?.', '?.', '??.', '?.', '?.'
      ],
      dayOfWeek: ['???????', '??????', '??????', '???', '?????', '?????', '?????', '???????']
    },
    pl: { // Polish
      months: [
        'stycze��', 'luty', 'marzec', 'kwiecie��', 'maj', 'czerwiec', 'lipiec', 'sierpie��', 'wrzesie��', 'pa?dziernik', 'listopad', 'grudzie��'
      ],
      dayOfWeekShort: [
        'nd', 'pn', 'wt', '?r', 'cz', 'pt', 'sb'
      ],
      dayOfWeek: ['niedziela', 'poniedzia?ek', 'wtorek', '?roda', 'czwartek', 'pi?tek', 'sobota']
    },
    pt: { // Portuguese
      months: [
        'Janeiro', 'Fevereiro', 'Mar?o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ],
      dayOfWeekShort: [
        'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'
      ],
      dayOfWeek: ['Domingo', 'Segunda', 'Ter?a', 'Quarta', 'Quinta', 'Sexta', 'S��bado']
    },
    ch: { // Simplified Chinese
      months: [
        'һ��', '����', '����', '����', '����', '����', '����', '����', '����', 'ʮ��', 'ʮһ��', 'ʮ����'
      ],
      dayOfWeekShort: [
        '��', 'һ', '��', '��', '��', '��', '��'
      ]
    },
    se: { // Swedish
      months: [
        'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'
      ],
      dayOfWeekShort: [
        'S?n', 'M?n', 'Tis', 'Ons', 'Tor', 'Fre', 'L?r'
      ]
    },
    kr: { // Korean
      months: [
        '1?', '2?', '3?', '4?', '5?', '6?', '7?', '8?', '9?', '10?', '11?', '12?'
      ],
      dayOfWeekShort: [
        '?', '?', '?', '?', '?', '?', '?'
      ],
      dayOfWeek: ['???', '???', '???', '???', '???', '???', '???']
    },
    it: { // Italian
      months: [
        'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
      ],
      dayOfWeekShort: [
        'Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab'
      ],
      dayOfWeek: ['Domenica', 'Luned��', 'Marted��', 'Mercoled��', 'Gioved��', 'Venerd��', 'Sabato']
    },
    da: { // Dansk
      months: [
        'January', 'Februar', 'Marts', 'April', 'Maj', 'Juni', 'July', 'August', 'September', 'Oktober', 'November', 'December'
      ],
      dayOfWeekShort: [
        'S?n', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'L?r'
      ],
      dayOfWeek: ['s?ndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'l?rdag']
    },
    no: { // Norwegian
      months: [
        'Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'
      ],
      dayOfWeekShort: [
        'S?n', 'Man', 'Tir', 'Ons', 'Tor', 'Fre', 'L?r'
      ],
      dayOfWeek: ['S?ndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'L?rdag']
    },
    ja: { // Japanese
      months: [
        '1��', '2��', '3��', '4��', '5��', '6��', '7��', '8��', '9��', '10��', '11��', '12��'
      ],
      dayOfWeekShort: [
        '��', '��', '��', 'ˮ', 'ľ', '��', '��'
      ],
      dayOfWeek: ['����', '����', '����', 'ˮ��', 'ľ��', '����', '����']
    },
    vi: { // Vietnamese
      months: [
        'Th��ng 1', 'Th��ng 2', 'Th��ng 3', 'Th��ng 4', 'Th��ng 5', 'Th��ng 6', 'Th��ng 7', 'Th��ng 8', 'Th��ng 9', 'Th��ng 10', 'Th��ng 11', 'Th��ng 12'
      ],
      dayOfWeekShort: [
        'CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'
      ],
      dayOfWeek: ['Ch? nh?t', 'Th? hai', 'Th? ba', 'Th? t?', 'Th? n?m', 'Th? s��u', 'Th? b?y']
    },
    sl: { // Sloven??ina
      months: [
        'Januar', 'Februar', 'Marec', 'April', 'Maj', 'Junij', 'Julij', 'Avgust', 'September', 'Oktober', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Ned', 'Pon', 'Tor', 'Sre', '?et', 'Pet', 'Sob'
      ],
      dayOfWeek: ['Nedelja', 'Ponedeljek', 'Torek', 'Sreda', '?etrtek', 'Petek', 'Sobota']
    },
    cs: { // ?e?tina
      months: [
        'Leden', '?nor', 'B?ezen', 'Duben', 'Kv��ten', '?erven', '?ervenec', 'Srpen', 'Z��?��', '?��jen', 'Listopad', 'Prosinec'
      ],
      dayOfWeekShort: [
        'Ne', 'Po', '?t', 'St', '?t', 'P��', 'So'
      ]
    },
    hu: { // Hungarian
      months: [
        'Janu��r', 'Febru��r', 'M��rcius', '?prilis', 'M��jus', 'J��nius', 'J��lius', 'Augusztus', 'Szeptember', 'Okt��ber', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Va', 'H��', 'Ke', 'Sze', 'Cs', 'P��', 'Szo'
      ],
      dayOfWeek: ['vas��rnap', 'h��tf?', 'kedd', 'szerda', 'cs��t?rt?k', 'p��ntek', 'szombat']
    },
    az: { //Azerbaijanian (Azeri)
      months: [
        'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'
      ],
      dayOfWeekShort: [
        'B', 'Be', '?a', '?', 'Ca', 'C', '?'
      ],
      dayOfWeek: ['Bazar', 'Bazar ert?si', '??r??nb? ax?am?', '??r??nb?', 'C��m? ax?am?', 'C��m?', '??nb?']
    },
    bs: { //Bosanski
      months: [
        'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
      ],
      dayOfWeekShort: [
        'Ned', 'Pon', 'Uto', 'Sri', '?et', 'Pet', 'Sub'
      ],
      dayOfWeek: ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', '?etvrtak', 'Petak', 'Subota']
    },
    ca: { //Catal��
      months: [
        'Gener', 'Febrer', 'Mar?', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre'
      ],
      dayOfWeekShort: [
        'Dg', 'Dl', 'Dt', 'Dc', 'Dj', 'Dv', 'Ds'
      ],
      dayOfWeek: ['Diumenge', 'Dilluns', 'Dimarts', 'Dimecres', 'Dijous', 'Divendres', 'Dissabte']
    },
    'en-GB': { //English (British)
      months: [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
      ],
      dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    },
    et: { //'Eesti'
      months: [
        'Jaanuar', 'Veebruar', 'M?rts', 'Aprill', 'Mai', 'Juuni', 'Juuli', 'August', 'September', 'Oktoober', 'November', 'Detsember'
      ],
      dayOfWeekShort: [
        'P', 'E', 'T', 'K', 'N', 'R', 'L'
      ],
      dayOfWeek: ['P��hap?ev', 'Esmasp?ev', 'Teisip?ev', 'Kolmap?ev', 'Neljap?ev', 'Reede', 'Laup?ev']
    },
    eu: { //Euskara
      months: [
        'Urtarrila', 'Otsaila', 'Martxoa', 'Apirila', 'Maiatza', 'Ekaina', 'Uztaila', 'Abuztua', 'Iraila', 'Urria', 'Azaroa', 'Abendua'
      ],
      dayOfWeekShort: [
        'Ig.', 'Al.', 'Ar.', 'Az.', 'Og.', 'Or.', 'La.'
      ],
      dayOfWeek: ['Igandea', 'Astelehena', 'Asteartea', 'Asteazkena', 'Osteguna', 'Ostirala', 'Larunbata']
    },
    fi: { //Finnish (Suomi)
      months: [
        'Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kes?kuu', 'Hein?kuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'
      ],
      dayOfWeekShort: [
        'Su', 'Ma', 'Ti', 'Ke', 'To', 'Pe', 'La'
      ],
      dayOfWeek: ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai']
    },
    gl: { //Galego
      months: [
        'Xan', 'Feb', 'Maz', 'Abr', 'Mai', 'Xun', 'Xul', 'Ago', 'Set', 'Out', 'Nov', 'Dec'
      ],
      dayOfWeekShort: [
        'Dom', 'Lun', 'Mar', 'Mer', 'Xov', 'Ven', 'Sab'
      ],
      dayOfWeek: ['Domingo', 'Luns', 'Martes', 'M��rcores', 'Xoves', 'Venres', 'S��bado']
    },
    hr: { //Hrvatski
      months: [
        'Sije?anj', 'Velja?a', 'O?ujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'
      ],
      dayOfWeekShort: [
        'Ned', 'Pon', 'Uto', 'Sri', '?et', 'Pet', 'Sub'
      ],
      dayOfWeek: ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', '?etvrtak', 'Petak', 'Subotagg']
    },
    ko: { //Korean (???)
      months: [
        '1?', '2?', '3?', '4?', '5?', '6?', '7?', '8?', '9?', '10?', '11?', '12?'
      ],
      dayOfWeekShort: [
        '?', '?', '?', '?', '?', '?', '?'
      ],
      dayOfWeek: ['???', '???', '???', '???', '???', '???', '???']
    },
    lt: { //Lithuanian (lietuvi?)
      months: [
        'Sausio', 'Vasario', 'Kovo', 'Baland?io', 'Gegu??s', 'Bir?elio', 'Liepos', 'Rugpj��?io', 'Rugs?jo', 'Spalio', 'Lapkri?io', 'Gruod?io'
      ],
      dayOfWeekShort: [
        'Sek', 'Pir', 'Ant', 'Tre', 'Ket', 'Pen', '?e?'
      ],
      dayOfWeek: ['Sekmadienis', 'Pirmadienis', 'Antradienis', 'Tre?iadienis', 'Ketvirtadienis', 'Penktadienis', '?e?tadienis']
    },
    lv: { //Latvian (Latvie?u)
      months: [
        'Janv��ris', 'Febru��ris', 'Marts', 'Apr��lis ', 'Maijs', 'J��nijs', 'J��lijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'
      ],
      dayOfWeekShort: [
        'Sv', 'Pr', 'Ot', 'Tr', 'Ct', 'Pk', 'St'
      ],
      dayOfWeek: ['Sv��tdiena', 'Pirmdiena', 'Otrdiena', 'Tre?diena', 'Ceturtdiena', 'Piektdiena', 'Sestdiena']
    },
    mk: { //Macedonian (���ѧܧ֧է�ߧ�ܧ�)
      months: [
        '?�ѧߧ�ѧ��', '��֧ӧ��ѧ��', '�ާѧ��', '�ѧ��ڧ�', '�ާ�?', '?��ߧ�', '?��ݧ�', '�ѧӧԧ���', '��֧��֧ާӧ��', '��ܧ��ާӧ��', '�ߧ�֧ާӧ��', '�է֧ܧ֧ާӧ��'
      ],
      dayOfWeekShort: [
        '�ߧ֧�', '����', '�ӧ��', '����', '��֧�', '��֧�', '��ѧ�'
      ],
      dayOfWeek: ['���֧է֧ݧ�', '����ߧ֧է֧ݧߧڧ�', '������ߧڧ�', '����֧է�', '���֧�ӧ����', '���֧���', '���ѧҧ���']
    },
    mn: { //Mongolian (����ߧԧ��)
      months: [
        '1-�� ��ѧ�', '2-�� ��ѧ�', '3-�� ��ѧ�', '4-�� ��ѧ�', '5-�� ��ѧ�', '6-�� ��ѧ�', '7-�� ��ѧ�', '8-�� ��ѧ�', '9-�� ��ѧ�', '10-�� ��ѧ�', '11-�� ��ѧ�', '12-�� ��ѧ�'
      ],
      dayOfWeekShort: [
        '���ѧ�', '�����', '�����', '��?��', '�����', '�����', '�����'
      ],
      dayOfWeek: ['���ѧӧѧ�', '����ԧާѧ�', '����ѧԧӧ�', '��?����', '���ѧѧ�ѧ�', '����ާҧ�', '�����']
    },
    'pt-BR': { //Portugu��s(Brasil)
      months: [
        'Janeiro', 'Fevereiro', 'Mar?o', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ],
      dayOfWeekShort: [
        'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'S��b'
      ],
      dayOfWeek: ['Domingo', 'Segunda', 'Ter?a', 'Quarta', 'Quinta', 'Sexta', 'S��bado']
    },
    sk: { //Sloven?ina
      months: [
        'Janu��r', 'Febru��r', 'Marec', 'Apr��l', 'M��j', 'J��n', 'J��l', 'August', 'September', 'Okt��ber', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Ne', 'Po', 'Ut', 'St', '?t', 'Pi', 'So'
      ],
      dayOfWeek: ['Nede?a', 'Pondelok', 'Utorok', 'Streda', '?tvrtok', 'Piatok', 'Sobota']
    },
    sq: { //Albanian (Shqip)
      months: [
        'Janar', 'Shkurt', 'Mars', 'Prill', 'Maj', 'Qershor', 'Korrik', 'Gusht', 'Shtator', 'Tetor', 'N?ntor', 'Dhjetor'
      ],
      dayOfWeekShort: [
        'Die', 'H?n', 'Mar', 'M?r', 'Enj', 'Pre', 'Shtu'
      ],
      dayOfWeek: ['E Diel', 'E H?n?', 'E Mart��', 'E M?rkur?', 'E Enjte', 'E Premte', 'E Shtun?']
    },
    'sr-YU': { //Serbian (Srpski)
      months: [
        'Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar', 'Novembar', 'Decembar'
      ],
      dayOfWeekShort: [
        'Ned', 'Pon', 'Uto', 'Sre', '?et', 'Pet', 'Sub'
      ],
      dayOfWeek: ['Nedelja', 'Ponedeljak', 'Utorak', 'Sreda', '?etvrtak', 'Petak', 'Subota']
    },
    sr: { //Serbian Cyrillic (������ܧ�)
      months: [
        '?�ѧߧ�ѧ�', '��֧ҧ��ѧ�', '�ާѧ��', '�ѧ��ڧ�', '�ާ�?', '?���', '?���', '�ѧӧԧ���', '��֧��֧ާҧѧ�', '��ܧ��ҧѧ�', '�ߧ�ӧ֧ާҧѧ�', '�է֧�֧ާҧѧ�'
      ],
      dayOfWeekShort: [
        '�ߧ֧�', '����', '����', '����', '��֧�', '��֧�', '����'
      ],
      dayOfWeek: ['���֧է�?��', '����ߧ֧է�?�ѧ�', '������ѧ�', '����֧է�', '���֧�ӧ��ѧ�', '���֧�ѧ�', '����ҧ���']
    },
    sv: { //Svenska
      months: [
        'Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'
      ],
      dayOfWeekShort: [
        'S?n', 'M?n', 'Tis', 'Ons', 'Tor', 'Fre', 'L?r'
      ],
      dayOfWeek: ['S?ndag', 'M?ndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'L?rdag']
    },
    'zh-TW': { //Traditional Chinese (���w����)
      months: [
        'һ��', '����', '����', '����', '����', '����', '����', '����', '����', 'ʮ��', 'ʮһ��', 'ʮ����'
      ],
      dayOfWeekShort: [
        '��', 'һ', '��', '��', '��', '��', '��'
      ],
      dayOfWeek: ['������', '����һ', '���ڶ�', '������', '������', '������', '������']
    },
    'zh-CN': { //Simplified Chinese (��������)
      months: [
        'һ��', '����', '����', '����', '����', '����', '����', '����', '����', 'ʮ��', 'ʮһ��', 'ʮ����'
      ],
      dayOfWeekShort: [
        '��', 'һ', '��', '��', '��', '��', '��'
      ],
      dayOfWeek: ['������', '����һ', '���ڶ�', '������', '������', '������', '������'],
      postsMonthTip: '�鿴yyyy��MM�µ�����',
      titleFormat: 'yyyy��MM��'
    },
    he: { //Hebrew (?????)
      months: [
        '?????', '??????', '???', '?????', '???', '????', '????', '??????', '??????', '???????', '??????', '?????'
      ],
      dayOfWeekShort: [
        '?\'', '?\'', '?\'', '?\'', '?\'', '?\'', '???'
      ],
      dayOfWeek: ['?????', '???', '?????', '?????', '?????', '????', '???', '?????']
    },
    hy: { // Armenian
      months: [
        '???????', '???????', '????', '?????', '?????', '??????', '??????', '???????', '?????????', '?????????', '????????', '?????????'
      ],
      dayOfWeekShort: [
        '??', '???', '???', '???', '???', '????', '???'
      ],
      dayOfWeek: ['??????', '??????????', '?????????', '??????????', '?????????', '??????', '?????']
    },
    kg: { // Kyrgyz
      months: [
        '?���?�� �ѧۧ�', '���ڧ�էڧ� �ѧۧ�', '���ѧݧԧѧ� �����ѧ�', '������ �����ѧ�', '����ԧ�', '����ݧا�', '���֧ܧ�', '���ѧ� ����ߧ�', '����� ����ߧ�', '����ԧ�٧է�� �ѧۧ�', '���֧�ڧߧڧ� �ѧۧ�', '���֧��ڧ� �ѧۧ�'
      ],
      dayOfWeekShort: [
        '���֧�', '��?��', '���֧�', '���ѧ�', '���֧�', '�����', '�����'
      ],
      dayOfWeek: [
        '���֧ܧ�֧ާ�', '��?�ۧ�?�ާ�', '���֧ۧ�֧ާ�', '���ѧ��֧ާ�', '���֧ۧ�֧ާҧ�', '����ާ�', '����֧ߧ�'
      ]
    },
    rm: { // Romansh
      months: [
        'Schaner', 'Favrer', 'Mars', 'Avrigl', 'Matg', 'Zercladur', 'Fanadur', 'Avust', 'Settember', 'October', 'November', 'December'
      ],
      dayOfWeekShort: [
        'Du', 'Gli', 'Ma', 'Me', 'Gie', 'Ve', 'So'
      ],
      dayOfWeek: [
        'Dumengia', 'Glindesdi', 'Mardi', 'Mesemna', 'Gievgia', 'Venderdi', 'Sonda'
      ]
    },
    ka: { // Georgian
      months: [
        '???????', '?????????', '?????', '??????', '?????', '??????', '??????', '???????', '??????????', '?????????', '????????', '?????????'
      ],
      dayOfWeekShort: [
        '??', '???', '????', '???', '???', '???', '???'
      ],
      dayOfWeek: ['?????', '????????', '?????????', '?????????', '?????????', '?????????', '??????']
    },
  };