values = [('asian food', 0.8046944588422775),
('asian soups', 0.06382672488689423),
('batchoy', 0.0556065688530604),
('bún bò huế', 0.05946756402651469),
('chinese food', 0.050995205839475),
('chinese noodles', 0.256398285428683),
('cuisine', 0.9061772127946218),
('curry', 0.06477334598700206),
('dish', 0.9676645497481028),
('egg', 0.05594524244467417),
('food', 0.9174598852793375),
('ingredient', 0.32469409704208374),
('japanese cuisine', 0.1192533125480016),
('laksa', 0.05901665488878886),
('lamian', 0.3987884769837062),
('lunch', 0.11351010700066884),
('meal', 0.10620496173699696),
('noodle', 0.8381902625163397),
('noodle soup', 0.19482933978239694),
('okinawa soba', 0.35765300691127777),
('ramen', 0.22269047300020853),
('saimin food', 0.1365587462981542),
('soup', 0.71331258614858),
('southeast asian food', 0.10214543839295705),
('spaghetti', 0.06301651895046234),
('stew', 0.052902271350224815),
('thai food', 0.10711899399757385),
('vegetarian food', 0.11897701521714528)]

values.sort(key=lambda x: -x[1])
values
s = 0
i = 0
valueSum = sum([v[1] for v in values])
for value in values:
    i += 1
    s += value[1]/ valueSum
    if s > 0.95:
        break

values[:i]
