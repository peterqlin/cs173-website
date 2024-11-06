oldcoursedir='http://courses.engr.illinois.edu/cs173/';
menuarray=[
    {t:'Home',a:'../index.html'},
    {t:'Staff',a:'staff.html'},
    {t:'Grading',a:'../Common/Info/grading-formula-and-assigned-work.html'},
    {t:'Help &#8609;',
        k:[
        {t:'FAQ',a:'../Common/Info/FAQ.html'},
        {t:'Missed Work',a:'../Common/Info/missed-work.html'},
        {t:'DRES',a:'../Common/Info/DRES.html'},
        {t:'How to do well',a:'../Common/Info/doingwell.html'},
        {t:'Big disasters',a:'../Common/Info/disaster.html'},
        ]},
    {t:'Lectures and Tutorials',a:'lectures.html'},
    {t:'Textbook',a:'http://mfleck.cs.illinois.edu/building-blocks/index-sp2020.html'},
    {t:'Piazza',a:'https://piazza.com/illinois/fall2024/becd'},//
    {t:'PrairieLearn',a:'https://us.prairielearn.com/pl/course_instance/161917'},//
    {t:'Exams',a:'Exams/index.html'},
    {t:'Prior Terms &nbsp; &#x21a1;',
    k:[
    {t:'Spring 2017',a:oldcoursedir+'sp2017/'},
    {t:'Fall 2016',a:oldcoursedir+'fa2016/'},
    {t:'Spring 2016',a:oldcoursedir+'sp2016/'},
    {t:'Fall 2015',a:oldcoursedir+'fa2015/'},
    {t:'Spring 2015',a:oldcoursedir+'sp2015/'},
    {t:'Fall 2014',a:oldcoursedir+'fa2014/'},
    {t:'Summer 2014',a:oldcoursedir+'su2014/'},
    {t:'Spring 2014',a:oldcoursedir+'sp2014/'},
    {t:'Fall 2013',a:oldcoursedir+'fa2013/'},
    {t:'Summer 2013',a:oldcoursedir+'su2013/'},
    {t:'Spring 2013',a:oldcoursedir+'sp2013/'},
    {t:'Fall 2012',a:oldcoursedir+'fa2012/'},
    {t:'Summer 2012',a:oldcoursedir+'su2012/'},
    {t:'Spring 2012',a:oldcoursedir+'sp2012/'},
    {t:'Fall 2011',a:oldcoursedir+'fa2011/'},
    {t:'Spring 2011',a:oldcoursedir+'sp2011/'},
    {t:'Fall 2010',a:oldcoursedir+'fa2010/'},
    {t:'Spring 2010',a:oldcoursedir+'sp2010/'},
    {t:'Fall 2009',a:oldcoursedir+'fa2009/'},
    {t:'Spring 2009',a:oldcoursedir+'sp2009/'},
    {t:'Fall 2008',a:oldcoursedir+'fa2008/'}
    ]}
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
    
