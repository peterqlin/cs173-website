oldcoursedir='http://courses.engr.illinois.edu/cs173/';
menuarray=[
    {t:'Home',a:'../index.html'},
    {t:'Lectures and Tutorials',a:'lectures.html'},
    {t:'Textbook',a:'http://mfleck.cs.illinois.edu/building-blocks/index-sp2020.html'},
    {t:'Syllabus',a:'../Common/Info/grading-formula-and-assigned-work.html'},
    {t:'Piazza',a:'https://piazza.com/illinois/fall2024/becd'},//
    {t:'PrairieLearn',a:'https://us.prairielearn.com/pl/course_instance/161917'},//
    {t:'Discord',a:'https://discord.gg/fXPfErs9dm'},//
    {t:'Exams',a:'Exams/index.html'},
    {t:'Prior Terms &nbsp; &#x21a1;',
        k:[
        {t:'Spring 2024',a:oldcoursedir+'sp2024/'},
        {t:'Fall 2023',a:oldcoursedir+'fa2023/'},
        {t:'Spring 2023',a:oldcoursedir+'sp2023/'},
        {t:'Fall 2022',a:oldcoursedir+'fa2022/'},
        {t:'Spring 2022',a:oldcoursedir+'sp2022/'},
        {t:'Fall 2021',a:oldcoursedir+'fa2021/'},
        {t:'Spring 2021',a:oldcoursedir+'sp2021/'},
        {t:'Fall 2020',a:oldcoursedir+'fa2020/'},
        {t:'Spring 2020',a:oldcoursedir+'sp2020/'},
        {t:'Fall 2019',a:oldcoursedir+'fa2019/'},
        {t:'Spring 2019',a:oldcoursedir+'sp2019/'},
        {t:'Fall 2018',a:oldcoursedir+'fa2018/'},
        {t:'Spring 2018',a:oldcoursedir+'sp2018/'},
        {t:'Fall 2017',a:oldcoursedir+'fa2017/'},
        {t:'Spring 2017',a:oldcoursedir+'sp2017/'},
        {t:'Fall 2016',a:oldcoursedir+'fa2016/'},
        {t:'Spring 2016',a:oldcoursedir+'sp2016/'},
        ]},
    {t:'Course Info + FAQ &#8609;',
        k:[
        {t:'FAQ',a:'../Common/Info/FAQ.html'},
        {t:'Missed Work',a:'../Common/Info/missed-work.html'},
        {t:'DRES',a:'../Common/Info/DRES.html'},
        {t:'How To Do Well',a:'../Common/Info/doingwell.html'},
        {t:'Big Disasters',a:'../Common/Info/disaster.html'},
        {t:'Staff',a:'staff.html'},
    ]},
    
    
    ];

    // document.getElementById('TopMenu').innerHTML=json2menu(menuarray);
    function json2menu(a){
        var s='<ul>', spth='https://courses.grainger.illinois.edu/cs173/fa2024/ALL-lectures/', u=document.URL;
        for(var i=0; i<a.length; i++){
            var l=a[i].a ? ((/^http/.test(a[i].a) ? '' : spth) + a[i].a) : 'placeholder',
                c=(u==l ? 'class="curnt" ' : '');
            
            // Check if the link is for Piazza or PrairieLearn
            var targetAttr = (l.includes('piazza.com') || l.includes('prairielearn.com')) ? ' target="_blank" rel="noopener noreferrer"' : '';
            
            s += '<li>' + 
                 (a[i].a 
                    ? `<a style="color: white" href="${l}" ${c} ${targetAttr}>` 
                    : '<span ' + c + 'style="color: white;" class="menu-link">') + 
                 a[i].t + 
                 (a[i].a ? '</a>' : '</span>') + 
                 (typeof a[i].k != 'undefined' ? json2menu(a[i].k) : '') +
                 '</li>';
        }
        s += '</ul>'; 
        return s;
    }
    
    document.getElementById('TopMenu').innerHTML = json2menu(menuarray);
    
