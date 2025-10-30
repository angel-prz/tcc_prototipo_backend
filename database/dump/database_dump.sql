--
-- PostgreSQL database dump
--

-- Dumped from database version 15.12 (Debian 15.12-0+deb12u2)
-- Dumped by pg_dump version 16.6

-- Started on 2025-07-15 11:04:14

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3505 (class 0 OID 74516)
-- Dependencies: 231
-- Data for Name: alunos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.alunos (id, turma, matricula, campus, curso, semestre, ano, fone_responsavel, created_at, updated_at) FROM stdin;
3	deserunt579659735	9118084360	Campus Pelotas - Visconde da Graça	Formação Pedagógica para Graduados não Licenciados	9	2006	(70) 1816-7949	2025-07-15 12:46:47	2025-07-15 12:46:47
4	amet1981	3833028070	Câmpus Camaquã	Licenciatura em Computação	9	2013	(78) 9561-5140	2025-07-15 12:46:47	2025-07-15 12:46:47
5	quo44185261	3747877393	Campus Santana do Livramento	Eletromecânica Subsequente	9	2000	(14) 9931-4842	2025-07-15 12:46:47	2025-07-15 12:46:47
6	quia763911894	2245346592	Campus Sapiranga	Design Gráfico	2	2001	(40) 8032-0566	2025-07-15 12:46:47	2025-07-15 12:46:47
7	totam0	6140955191	Centro de Referência	Edificações	7	2025	(80) 6468-5338	2025-07-15 12:46:47	2025-07-15 12:46:47
8	dolor4457	4075297297	Centro de Referência	Pedagogia	1	1990	(05) 9858-7011	2025-07-15 12:46:47	2025-07-15 12:46:47
11	est7332366	4752566363	Campus Sapucaia do Sul	Química	4	2025	(68) 9600-8466	2025-07-15 12:46:47	2025-07-15 12:46:47
14	beatae1754966	3385894970	Campus Sapucaia do Sul	Eletrotécnica	7	1983	(61) 7423-2029	2025-07-15 12:46:47	2025-07-15 12:46:47
15	qui6	5821397671	Campus Passo Fundo	Edificações	0	1973	(48) 2491-8561	2025-07-15 12:46:47	2025-07-15 12:46:47
16	rerum7	5062508434	Campus Sapucaia do Sul	Licenciatura em Letras - Língua Portuguesa e Língua Inglesa e suas Respectivas Literaturas	1	2003	(32) 1669-9584	2025-07-15 12:46:47	2025-07-15 12:46:47
20	enim673450690	8655389575	Campus Bagé	Eletromecânica Subsequente	0	2013	(85) 9780-3264	2025-07-15 12:46:47	2025-07-15 12:46:47
21	aut1029203	3125299567	Campus Gravataí	Engenharia Elétrica	8	1983	(57) 3933-2212	2025-07-15 12:46:47	2025-07-15 12:46:47
22	eaque5444175	6994675764	Campus Jaguarão	Mestrado Profissional em Engenharia e Ciências Ambientais	8	1996	(54) 9990-4110	2025-07-15 12:46:47	2025-07-15 12:46:47
23	magnam61	2177739648	Campus Novo Hamburgo	Engenharia de Produção	5	2006	(11) 3382-6248	2025-07-15 12:46:47	2025-07-15 12:46:47
24	ipsum68	1849516973	Câmpus Camaquã	Mestrado Profissional em Engenharia e Ciências Ambientais	8	2008	(80) 0616-1534	2025-07-15 12:46:47	2025-07-15 12:46:47
26	autem7712	6737849426	Reitoria	Formação Pedagógica para Graduados não Licenciados	3	1999	(82) 6834-8357	2025-07-15 12:46:47	2025-07-15 12:46:47
27	illo4331	5945746565	Campus Charqueadas	Mestrado Profissional e Doutorado Profissional em Educação e Tecnologia	4	2011	(69) 3660-7146	2025-07-15 12:46:47	2025-07-15 12:46:47
28	qui8535912	7848193550	Campus Santana do Livramento	Saneamento Ambiental	4	1971	(51) 8564-3826	2025-07-15 12:46:47	2025-07-15 12:46:47
29	molestias20388453	6765675775	Campus Passo Fundo	Eletromecânica	5	2002	(38) 6879-5317	2025-07-15 12:46:47	2025-07-15 12:46:47
33	eius7700	5483340329	Campus Jaguarão	Química	1	2004	(23) 1082-6348	2025-07-15 12:46:47	2025-07-15 12:46:47
35	cupiditate62117346	3088410707	Campus Gravataí	Eletrônica	8	2016	(09) 3239-7445	2025-07-15 12:46:47	2025-07-15 12:46:47
38	cum6003787	7128599925	Campus Lajeado	Licenciatura em Letras - Língua Portuguesa e Língua Inglesa e suas Respectivas Literaturas	0	1971	(05) 0754-0522	2025-07-15 12:46:47	2025-07-15 12:46:47
40	sapiente125	2410220736	Campus Novo Hamburgo	Química	1	1990	(37) 4397-5721	2025-07-15 12:46:47	2025-07-15 12:46:47
50	doloremque260	3122105268	Reitoria	Mestrado Profissional e Doutorado Profissional em Educação e Tecnologia	9	2019	(20) 2764-2054	2025-07-15 12:46:47	2025-07-15 12:46:47
\.


--
-- TOC entry 3494 (class 0 OID 74425)
-- Dependencies: 220
-- Data for Name: cache; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cache (key, value, expiration) FROM stdin;
\.


--
-- TOC entry 3495 (class 0 OID 74432)
-- Dependencies: 221
-- Data for Name: cache_locks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cache_locks (key, owner, expiration) FROM stdin;
\.


--
-- TOC entry 3504 (class 0 OID 74496)
-- Dependencies: 230
-- Data for Name: consultas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.consultas (id, profissional_id, paciente_id, status, observacao, data, hora, created_at, updated_at) FROM stdin;
1	61	38	realizada	Quis ullam sint eaque delectus.	1973-06-14	14:36:58	2025-07-15 12:46:47	2025-07-15 12:46:47
3	67	48	agendada	Neque illo quisquam dicta ratione et veritatis.	2009-08-16	02:13:28	2025-07-15 12:46:47	2025-07-15 12:46:47
4	58	47	realizada	Ratione ut omnis nulla consequatur non.	1973-12-02	02:41:03	2025-07-15 12:46:47	2025-07-15 12:46:47
5	63	4	agendada	Et asperiores nam autem minima et sed.	1986-01-29	15:37:15	2025-07-15 12:46:47	2025-07-15 12:46:47
6	67	48	agendada	\N	2013-09-06	03:04:14	2025-07-15 12:46:47	2025-07-15 12:46:47
7	57	22	agendada	Suscipit aut distinctio iure eos autem labore.	2003-02-10	12:51:23	2025-07-15 12:46:47	2025-07-15 12:46:47
8	53	1	realizada	Ipsam quia at qui.	2009-03-03	20:46:33	2025-07-15 12:46:47	2025-07-15 12:46:47
9	61	28	agendada	\N	2001-11-17	08:29:09	2025-07-15 12:46:47	2025-07-15 12:46:47
10	63	45	cancelada	Non iusto totam enim in.	1997-07-27	19:29:11	2025-07-15 12:46:47	2025-07-15 12:46:47
11	64	34	cancelada	Illo asperiores illo perferendis.	2018-06-07	02:10:58	2025-07-15 12:46:47	2025-07-15 12:46:47
12	57	39	realizada	\N	2008-08-10	18:45:34	2025-07-15 12:46:47	2025-07-15 12:46:47
13	63	40	agendada	Ut magni quod aut aut dolore.	1979-11-01	16:50:18	2025-07-15 12:46:47	2025-07-15 12:46:47
14	63	1	realizada	\N	2007-11-20	11:53:39	2025-07-15 12:46:47	2025-07-15 12:46:47
15	56	17	cancelada	\N	1976-11-14	18:10:38	2025-07-15 12:46:47	2025-07-15 12:46:47
16	54	4	realizada	\N	2006-06-11	21:24:31	2025-07-15 12:46:47	2025-07-15 12:46:47
17	52	34	realizada	Eius eum error nobis nostrum unde occaecati.	1984-05-01	16:51:16	2025-07-15 12:46:47	2025-07-15 12:46:47
18	57	49	realizada	\N	1973-04-17	01:29:35	2025-07-15 12:46:47	2025-07-15 12:46:47
19	70	28	agendada	\N	2009-11-18	04:04:29	2025-07-15 12:46:47	2025-07-15 12:46:47
20	67	15	agendada	Deleniti quasi consectetur modi quia architecto facilis.	1978-10-01	13:42:57	2025-07-15 12:46:47	2025-07-15 12:46:47
21	57	9	cancelada	\N	2016-08-20	23:36:32	2025-07-15 12:46:47	2025-07-15 12:46:47
22	57	29	realizada	\N	2012-09-30	01:12:22	2025-07-15 12:46:47	2025-07-15 12:46:47
23	66	33	agendada	\N	1971-09-17	18:52:02	2025-07-15 12:46:47	2025-07-15 12:46:47
24	59	35	cancelada	\N	1976-08-06	11:18:15	2025-07-15 12:46:47	2025-07-15 12:46:47
25	66	6	cancelada	Est quis maiores sunt consequatur et deleniti.	1992-01-04	18:25:56	2025-07-15 12:46:47	2025-07-15 12:46:47
26	52	46	cancelada	Sed nihil id est et aut nemo.	1997-12-24	19:15:26	2025-07-15 12:46:47	2025-07-15 12:46:47
27	70	3	realizada	Optio sed similique nesciunt doloremque nihil eos quia inventore.	1995-12-29	13:12:48	2025-07-15 12:46:47	2025-07-15 12:46:47
28	55	33	realizada	Adipisci sint aut velit quo qui perferendis.	1979-06-16	05:23:23	2025-07-15 12:46:47	2025-07-15 12:46:47
29	69	21	cancelada	\N	2018-01-05	19:27:00	2025-07-15 12:46:47	2025-07-15 12:46:47
30	69	32	realizada	\N	2022-11-03	22:31:53	2025-07-15 12:46:47	2025-07-15 12:46:47
31	57	40	realizada	Architecto quia minus dolores id excepturi.	1974-11-30	10:25:26	2025-07-15 12:46:47	2025-07-15 12:46:47
32	66	41	agendada	Facilis sit repudiandae aut aut vero.	1983-10-12	11:53:44	2025-07-15 12:46:47	2025-07-15 12:46:47
33	53	41	agendada	\N	2012-01-04	05:05:34	2025-07-15 12:46:47	2025-07-15 12:46:47
34	62	3	realizada	Voluptas et blanditiis perspiciatis commodi perspiciatis sunt autem.	1972-01-24	20:40:30	2025-07-15 12:46:47	2025-07-15 12:46:47
35	51	14	realizada	\N	1990-11-15	14:05:37	2025-07-15 12:46:47	2025-07-15 12:46:47
36	69	41	cancelada	\N	1991-03-25	11:05:22	2025-07-15 12:46:47	2025-07-15 12:46:47
37	62	17	cancelada	\N	1977-11-20	22:04:11	2025-07-15 12:46:47	2025-07-15 12:46:47
38	63	7	agendada	Voluptates et perferendis adipisci ea et quo.	1989-02-16	19:19:59	2025-07-15 12:46:47	2025-07-15 12:46:47
39	68	48	agendada	\N	1994-04-04	14:01:15	2025-07-15 12:46:47	2025-07-15 12:46:47
40	67	20	cancelada	\N	1999-06-07	16:30:16	2025-07-15 12:46:47	2025-07-15 12:46:47
41	54	36	agendada	Laborum sequi ab assumenda neque et debitis voluptates quo.	1970-09-22	12:55:00	2025-07-15 12:46:47	2025-07-15 12:46:47
42	69	21	realizada	\N	2020-05-21	19:01:50	2025-07-15 12:46:47	2025-07-15 12:46:47
43	61	44	realizada	Eum ipsum qui illum tempore ab voluptas ratione eligendi.	2024-08-20	08:30:01	2025-07-15 12:46:47	2025-07-15 12:46:47
44	59	19	agendada	Et aut sint quo quidem occaecati.	2007-01-29	22:31:10	2025-07-15 12:46:47	2025-07-15 12:46:47
45	64	16	agendada	\N	1996-07-27	03:26:40	2025-07-15 12:46:47	2025-07-15 12:46:47
46	58	33	realizada	\N	2006-04-04	10:54:31	2025-07-15 12:46:47	2025-07-15 12:46:47
47	52	6	agendada	Deleniti itaque earum consequatur consequatur ea impedit id.	1976-01-19	15:40:02	2025-07-15 12:46:47	2025-07-15 12:46:47
48	52	30	realizada	Molestiae nostrum aut nulla.	2015-01-15	15:31:08	2025-07-15 12:46:47	2025-07-15 12:46:47
49	65	50	realizada	\N	1993-03-31	18:30:23	2025-07-15 12:46:47	2025-07-15 12:46:47
51	54	2	agendada	\N	2025-07-20	14:30:00	2025-07-15 13:13:15	2025-07-15 13:13:15
52	54	2	agendada	\N	2025-07-20	14:30:00	2025-07-15 13:15:15	2025-07-15 13:15:15
54	54	2	agendada	\N	2025-07-20	14:30:00	2025-07-15 13:18:45	2025-07-15 13:18:45
55	54	2	agendada	"Consulta de rotina"	2025-07-20	14:30:00	2025-07-15 13:19:32	2025-07-15 13:19:32
56	54	2	agendada	Consulta de rotina	2025-07-20	14:30:00	2025-07-15 13:19:53	2025-07-15 13:19:53
57	54	2	agendada	Consulta de rotina	2025-07-20	14:30:00	2025-07-15 13:20:30	2025-07-15 13:20:30
\.


--
-- TOC entry 3510 (class 0 OID 74558)
-- Dependencies: 236
-- Data for Name: dispensas_educacao_fisica; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.dispensas_educacao_fisica (id, aluno_id, consulta_id, turma, motivo, comeco, fim, numero_dias, created_at, updated_at) FROM stdin;
1	14	35	at70	Quia voluptate ut enim eligendi. Atque atque et autem atque consequatur. Repellat in sed aut qui nam voluptas. Reiciendis aut assumenda cumque illo.	2014-09-15	2011-10-26	809	2025-07-15 12:46:47	2025-07-15 12:46:47
2	29	1	eos83220941	Nesciunt qui ex consequatur rerum quis et et sed. Quis explicabo eos tempore eos officia. Atque est architecto est non.	1999-12-16	1975-07-12	1831343	2025-07-15 12:46:47	2025-07-15 12:46:47
3	28	35	repellat8436522	Nostrum quas ad aspernatur et voluptatem quidem optio. Et officiis quaerat nemo sit et incidunt corporis laborum. Beatae sapiente nesciunt unde aut. Maiores rem vel iure blanditiis facere.	2013-01-22	1991-12-04	684479396	2025-07-15 12:46:47	2025-07-15 12:46:47
4	21	46	consequatur40	Fugiat at quis magni quam aut exercitationem ipsa. Non qui ea nihil nobis velit ullam praesentium eos. Perspiciatis enim nulla qui voluptatem ullam voluptas.	1976-08-02	2024-08-30	9	2025-07-15 12:46:47	2025-07-15 12:46:47
5	28	46	odio759429	Sint tenetur est qui quibusdam. Illo nesciunt harum voluptatem officiis. Unde illo corrupti in fuga odit optio esse.	2007-05-19	2023-08-17	4368	2025-07-15 12:46:47	2025-07-15 12:46:47
\.


--
-- TOC entry 3500 (class 0 OID 74457)
-- Dependencies: 226
-- Data for Name: failed_jobs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.failed_jobs (id, uuid, connection, queue, payload, exception, failed_at) FROM stdin;
\.


--
-- TOC entry 3506 (class 0 OID 74530)
-- Dependencies: 232
-- Data for Name: funcionarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.funcionarios (id, tipo_funcionario, cargo, setor, ramal, turno, created_at, updated_at) FROM stdin;
1	tecnico_administrativo	Algorithm Developer	quia	7432	matutino	2025-07-15 12:46:47	2025-07-15 12:46:47
2	docente	ccc	delectus	809	vespertino	2025-07-15 12:46:47	2025-07-15 12:46:47
9	terceirizado	Food Service Manager	eos	8	noturno	2025-07-15 12:46:47	2025-07-15 12:46:47
10	docente	Nutritionist	rerum	2	matutino	2025-07-15 12:46:47	2025-07-15 12:46:47
12	tecnico_administrativo	Tire Builder	eius	6	noturno	2025-07-15 12:46:47	2025-07-15 12:46:47
13	tecnico_administrativo	Chemist	qui	1617340	noturno	2025-07-15 12:46:47	2025-07-15 12:46:47
17	docente	User Experience Researcher	et	5170	matutino	2025-07-15 12:46:47	2025-07-15 12:46:47
18	tecnico_administrativo	Electric Motor Repairer	consequatur	43	noturno	2025-07-15 12:46:47	2025-07-15 12:46:47
19	docente	Buyer	sint	69459	matutino	2025-07-15 12:46:47	2025-07-15 12:46:47
25	docente	Dispatcher	unde	56	vespertino	2025-07-15 12:46:47	2025-07-15 12:46:47
30	docente	Utility Meter Reader	eos	987228177	matutino	2025-07-15 12:46:47	2025-07-15 12:46:47
31	tecnico_administrativo	Silversmith	et	5	matutino	2025-07-15 12:46:47	2025-07-15 12:46:47
32	tecnico_administrativo	Office and Administrative Support Worker	fugit	702451	matutino	2025-07-15 12:46:47	2025-07-15 12:46:47
34	docente	Engine Assembler	eos	208812332	matutino	2025-07-15 12:46:47	2025-07-15 12:46:47
36	tecnico_administrativo	Computer Scientist	rerum	80998	matutino	2025-07-15 12:46:47	2025-07-15 12:46:47
37	terceirizado	Law Enforcement Teacher	perspiciatis	343302623	matutino	2025-07-15 12:46:47	2025-07-15 12:46:47
39	terceirizado	Fire Fighter	nisi	623	vespertino	2025-07-15 12:46:47	2025-07-15 12:46:47
41	terceirizado	Construction Laborer	id	80740513	noturno	2025-07-15 12:46:47	2025-07-15 12:46:47
42	docente	Crushing Grinding Machine Operator	similique	55113	noturno	2025-07-15 12:46:47	2025-07-15 12:46:47
43	terceirizado	Pipe Fitter	quibusdam	76648987	noturno	2025-07-15 12:46:47	2025-07-15 12:46:47
44	terceirizado	Floor Layer	quas	3	noturno	2025-07-15 12:46:47	2025-07-15 12:46:47
45	docente	Telephone Operator	dicta	4168	noturno	2025-07-15 12:46:47	2025-07-15 12:46:47
46	tecnico_administrativo	Radiologic Technologist	voluptatem	315	vespertino	2025-07-15 12:46:47	2025-07-15 12:46:47
47	docente	Crane and Tower Operator	rerum	6323	vespertino	2025-07-15 12:46:47	2025-07-15 12:46:47
48	docente	Foreign Language Teacher	veniam	45	vespertino	2025-07-15 12:46:47	2025-07-15 12:46:47
49	terceirizado	Event Planner	id	62442	vespertino	2025-07-15 12:46:47	2025-07-15 12:46:47
\.


--
-- TOC entry 3508 (class 0 OID 74546)
-- Dependencies: 234
-- Data for Name: horarios_profissionais; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.horarios_profissionais (id, profissional_id, dia_semana, entrada, saida, created_at, updated_at) FROM stdin;
1	55	quarta	15:53:00	08:35:00	2025-07-15 12:46:46	2025-07-15 12:46:46
3	58	quarta	05:25:00	19:44:00	2025-07-15 12:46:46	2025-07-15 12:46:46
4	57	segunda	22:43:00	17:56:00	2025-07-15 12:46:46	2025-07-15 12:46:46
5	65	quarta	06:09:00	12:53:00	2025-07-15 12:46:46	2025-07-15 12:46:46
6	60	sexta	09:07:00	08:20:00	2025-07-15 12:46:46	2025-07-15 12:46:46
7	56	quinta	16:38:00	17:20:00	2025-07-15 12:46:46	2025-07-15 12:46:46
8	67	segunda	02:44:00	01:54:00	2025-07-15 12:46:46	2025-07-15 12:46:46
9	65	terca	21:35:00	12:14:00	2025-07-15 12:46:46	2025-07-15 12:46:46
10	56	segunda	00:22:00	17:22:00	2025-07-15 12:46:46	2025-07-15 12:46:46
11	55	quinta	05:04:00	01:22:00	2025-07-15 12:46:46	2025-07-15 12:46:46
12	63	segunda	16:55:00	05:02:00	2025-07-15 12:46:46	2025-07-15 12:46:46
13	70	quinta	15:12:00	21:50:00	2025-07-15 12:46:46	2025-07-15 12:46:46
14	67	quarta	20:08:00	03:13:00	2025-07-15 12:46:46	2025-07-15 12:46:46
15	68	quinta	00:26:00	08:45:00	2025-07-15 12:46:46	2025-07-15 12:46:46
16	69	sexta	18:45:00	22:54:00	2025-07-15 12:46:46	2025-07-15 12:46:46
17	66	terca	04:39:00	04:42:00	2025-07-15 12:46:46	2025-07-15 12:46:46
18	70	sexta	02:21:00	04:14:00	2025-07-15 12:46:46	2025-07-15 12:46:46
19	57	quinta	22:02:00	01:38:00	2025-07-15 12:46:46	2025-07-15 12:46:46
20	55	segunda	08:48:00	21:39:00	2025-07-15 12:46:46	2025-07-15 12:46:46
21	65	Quarta	17:00:00	23:00:00	2025-07-15 14:00:59	2025-07-15 14:02:26
\.


--
-- TOC entry 3498 (class 0 OID 74449)
-- Dependencies: 224
-- Data for Name: job_batches; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.job_batches (id, name, total_jobs, pending_jobs, failed_jobs, failed_job_ids, options, cancelled_at, created_at, finished_at) FROM stdin;
\.


--
-- TOC entry 3497 (class 0 OID 74440)
-- Dependencies: 223
-- Data for Name: jobs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.jobs (id, queue, payload, attempts, reserved_at, available_at, created_at) FROM stdin;
\.


--
-- TOC entry 3489 (class 0 OID 74390)
-- Dependencies: 215
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.migrations (id, migration, batch) FROM stdin;
1	0001_01_01_000000_create_users_table	1
2	0001_01_01_000001_create_cache_table	1
3	0001_01_01_000002_create_jobs_table	1
4	2025_04_23_134151_create_profissionals_table	1
5	2025_04_25_121938_create_pacientes_table	1
6	2025_04_25_130439_create_consultas_table	1
7	2025_06_27_134349_create_alunos_table	1
8	2025_06_27_134357_create_funcionarios_table	1
9	2025_06_27_134414_create_horarios_profissionals_table	1
10	2025_06_28_123507_create_dispensa_educacao_fisicas_table	1
11	2025_07_07_171235_create_personal_access_tokens_table	1
\.


--
-- TOC entry 3502 (class 0 OID 74483)
-- Dependencies: 228
-- Data for Name: pacientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pacientes (id, tipo_paciente, created_at, updated_at) FROM stdin;
1	funcionario	2025-07-15 12:46:46	2025-07-15 12:46:46
2	funcionario	2025-07-15 12:46:46	2025-07-15 12:46:46
3	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
4	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
5	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
6	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
7	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
8	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
9	funcionario	2025-07-15 12:46:46	2025-07-15 12:46:46
10	funcionario	2025-07-15 12:46:46	2025-07-15 12:46:46
11	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
12	funcionario	2025-07-15 12:46:46	2025-07-15 12:46:46
13	funcionario	2025-07-15 12:46:46	2025-07-15 12:46:46
14	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
15	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
16	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
17	funcionario	2025-07-15 12:46:46	2025-07-15 12:46:46
18	funcionario	2025-07-15 12:46:46	2025-07-15 12:46:46
19	funcionario	2025-07-15 12:46:46	2025-07-15 12:46:46
20	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
21	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
22	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
23	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
24	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
25	funcionario	2025-07-15 12:46:46	2025-07-15 12:46:46
26	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
27	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
28	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
29	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
30	funcionario	2025-07-15 12:46:46	2025-07-15 12:46:46
31	funcionario	2025-07-15 12:46:46	2025-07-15 12:46:46
32	funcionario	2025-07-15 12:46:46	2025-07-15 12:46:46
33	aluno	2025-07-15 12:46:46	2025-07-15 12:46:46
34	funcionario	2025-07-15 12:46:46	2025-07-15 12:46:46
35	aluno	2025-07-15 12:46:47	2025-07-15 12:46:47
36	funcionario	2025-07-15 12:46:47	2025-07-15 12:46:47
37	funcionario	2025-07-15 12:46:47	2025-07-15 12:46:47
38	aluno	2025-07-15 12:46:47	2025-07-15 12:46:47
39	funcionario	2025-07-15 12:46:47	2025-07-15 12:46:47
40	aluno	2025-07-15 12:46:47	2025-07-15 12:46:47
41	funcionario	2025-07-15 12:46:47	2025-07-15 12:46:47
42	funcionario	2025-07-15 12:46:47	2025-07-15 12:46:47
43	funcionario	2025-07-15 12:46:47	2025-07-15 12:46:47
44	funcionario	2025-07-15 12:46:47	2025-07-15 12:46:47
45	funcionario	2025-07-15 12:46:47	2025-07-15 12:46:47
46	funcionario	2025-07-15 12:46:47	2025-07-15 12:46:47
47	funcionario	2025-07-15 12:46:47	2025-07-15 12:46:47
48	funcionario	2025-07-15 12:46:47	2025-07-15 12:46:47
49	funcionario	2025-07-15 12:46:47	2025-07-15 12:46:47
50	aluno	2025-07-15 12:46:47	2025-07-15 12:46:47
\.


--
-- TOC entry 3492 (class 0 OID 74409)
-- Dependencies: 218
-- Data for Name: password_reset_tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.password_reset_tokens (email, token, created_at) FROM stdin;
\.


--
-- TOC entry 3512 (class 0 OID 74577)
-- Dependencies: 238
-- Data for Name: personal_access_tokens; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.personal_access_tokens (id, tokenable_type, tokenable_id, name, token, abilities, last_used_at, expires_at, created_at, updated_at) FROM stdin;
\.


--
-- TOC entry 3501 (class 0 OID 74468)
-- Dependencies: 227
-- Data for Name: profissionais; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.profissionais (id, tipo_profissional, sigla_conselho, uf_conselho, numero_conselho, created_at, updated_at) FROM stdin;
51	enfermeiro	COREN	MN	0843444764	2025-07-15 12:46:46	2025-07-15 12:46:46
52	bolsista	\N	NJ	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
53	enfermeiro	COREN	FL	4227777884	2025-07-15 12:46:46	2025-07-15 12:46:46
54	enfermeiro	COREN	TX	2851060303	2025-07-15 12:46:46	2025-07-15 12:46:46
55	enfermeiro	COREN	VA	3947185482	2025-07-15 12:46:46	2025-07-15 12:46:46
56	medico	CRM	MN	0146081146	2025-07-15 12:46:46	2025-07-15 12:46:46
57	tecnico_enfermeiro	COREN	IN	2370963341	2025-07-15 12:46:46	2025-07-15 12:46:46
58	medico	CRM	WV	4787062308	2025-07-15 12:46:46	2025-07-15 12:46:46
59	tecnico_enfermeiro	COREN	RI	1764688318	2025-07-15 12:46:46	2025-07-15 12:46:46
60	medico	CRM	NV	8212239051	2025-07-15 12:46:46	2025-07-15 12:46:46
61	bolsista	\N	VA	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
62	enfermeiro	COREN	MD	1442975554	2025-07-15 12:46:46	2025-07-15 12:46:46
63	enfermeiro	COREN	OK	8212436452	2025-07-15 12:46:46	2025-07-15 12:46:46
64	enfermeiro	COREN	AK	3054023624	2025-07-15 12:46:46	2025-07-15 12:46:46
65	odontologista	CRO	CT	2376724774	2025-07-15 12:46:46	2025-07-15 12:46:46
66	enfermeiro	COREN	MN	8698681889	2025-07-15 12:46:46	2025-07-15 12:46:46
67	tecnico_enfermeiro	COREN	SD	6576126390	2025-07-15 12:46:46	2025-07-15 12:46:46
68	odontologista	CRO	KS	9361669174	2025-07-15 12:46:46	2025-07-15 12:46:46
69	enfermeiro	COREN	IN	0565686952	2025-07-15 12:46:46	2025-07-15 12:46:46
70	tecnico_enfermeiro	COREN	MA	3772046026	2025-07-15 12:46:46	2025-07-15 12:46:46
\.


--
-- TOC entry 3493 (class 0 OID 74416)
-- Dependencies: 219
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sessions (id, user_id, ip_address, user_agent, payload, last_activity) FROM stdin;
dhLKDM6csvntz8BSYPbFNt7zy8Y5rkhaxkGbpx1p	\N	127.0.0.1	PostmanRuntime/7.44.0	YTozOntzOjY6Il90b2tlbiI7czo0MDoiVm5kOFhlN3RrOXgyWERUUW44TmowV3d5aGlwWm9GWUhXMngzVkFhWCI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMCI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=	1752585094
\.


--
-- TOC entry 3491 (class 0 OID 74397)
-- Dependencies: 217
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, email, email_verified_at, password, name, data_nascimento, sexo, endereco, naturalidade, fone_celular, fone_fixo, tipo_usuario, remember_token, created_at, updated_at) FROM stdin;
1	borer.janie@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Aracely Lockman	1985-06-20	M	424 Joannie Pine\nKingside, MD 21169-2742	Aratown	281.253.0495	+1 (219) 395-3207	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
2	london44@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Ezra Kuhn	2007-09-17	M	696 Kane Valleys\nDomenicoview, CO 73403-7159	Lindhaven	954.719.3678	+19385254580	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
3	mcdermott.anne@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Jadyn Maggio DVM	2022-03-30	M	2543 Mortimer Villages Suite 016\nEileentown, AL 01341-1093	Cathyfurt	917.435.2704	+1-352-202-0544	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
4	rigoberto58@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Ignatius Watsica	2024-05-15	M	22268 Keshaun Terrace\nEast Kattietown, ME 49294	Stehrchester	(240) 248-4167	+1.986.395.1870	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
5	leon.gutmann@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Alex Jones DDS	1983-07-03	F	2681 Jordane Key Apt. 033\nNew Viola, AL 13768	East Luzchester	+1.425.681.3565	1-804-992-3328	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
6	toy.quigley@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Lloyd Mraz	2012-09-13	M	74767 Fernando Junctions Suite 368\nConsidineberg, WV 14273	Reinabury	+1-341-432-4808	586-746-0460	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
7	lkunde@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Santino Rath	1982-07-29	M	21349 Katrine Lake Apt. 889\nSouth Jazmin, SD 84364-8317	North Ryanville	+1-854-928-3309	+1.754.785.5818	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
8	lindsey.ritchie@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Tiffany Trantow V	1977-10-12	M	2334 Kade Springs Suite 184\nFerryhaven, WV 05282-5866	Fritschland	303-547-3941	+1.986.556.7142	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
9	xlueilwitz@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Isom Lind	1982-10-25	M	4045 Rowan Overpass Suite 122\nWillmsstad, ND 41397	South Bayleeburgh	878.392.2937	1-520-728-0985	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
10	anais02@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Mr. Francesco Hahn IV	1998-04-20	M	4063 Julia Highway Apt. 997\nEast Garretbury, UT 83730	New Ophelia	(316) 688-1006	(629) 313-7058	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
11	lawrence05@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Tiffany Predovic	1977-08-13	M	4056 Kutch Cape Apt. 280\nNorth Vance, NV 68830-1129	Yoststad	503.730.9413	239.499.7740	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
12	ona.prosacco@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Dr. Gene Paucek DDS	1971-12-04	M	6348 Keeling Square Suite 562\nCarrollview, KY 91994-2973	Jakaylahaven	612.235.1862	+1-631-435-8251	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
13	wemard@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Danyka Ferry	2003-07-21	M	7280 McKenzie Shores Apt. 650\nJovanfurt, AL 48839-3196	Langoshchester	1-551-539-1881	847-271-4363	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
14	ukilback@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Kristy O'Conner DVM	1997-10-28	F	32868 Greenholt Via Apt. 040\nFreedaborough, NH 45248-7807	Hahnhaven	+12546019668	+1-707-444-1692	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
15	wcrist@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Berta Bernier	1982-02-24	F	21228 Schowalter Garden Apt. 626\nNew Drew, IN 36860	Elenorview	(386) 437-7254	283.999.9059	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
16	nboehm@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Jan Torphy Jr.	1979-08-09	F	36302 Caleb Common Suite 772\nBlockton, MO 26651-4435	Lake Dagmar	1-804-971-9915	502.930.2129	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
17	fausto07@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Elliot Kris	1994-01-30	F	658 Willms Circle\nEast Itzel, PA 51473-6938	South Sherwood	+16897534367	1-770-260-4878	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
18	leuschke.louvenia@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Frida Murphy	2001-07-03	F	72391 Jenkins Points Suite 602\nMcKenzieton, WY 80467-4632	West Magdalena	954.995.7731	+1.650.598.9159	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
19	magali01@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Prof. Constantin Yundt	1985-03-15	F	66813 Rory Rest\nOvaburgh, NM 21368-0744	Cummingsville	+1.325.227.5848	(929) 249-4746	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
20	lesley.hettinger@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Jessika Waelchi	2002-12-24	F	70512 Gina Islands Apt. 000\nPort Alex, HI 16657	Corwinland	1-530-417-2423	1-972-566-7192	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
21	kkerluke@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Mustafa Schaden	2020-08-10	F	30456 Metz Station Apt. 628\nWest Gudrunmouth, DE 09259	Langstad	+17706197666	+1-479-992-4875	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
22	sherwood68@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Nora Gerhold	1991-01-25	F	23377 Xzavier Brooks Suite 914\nRaynorview, MI 08655-4681	South Torey	718-271-4990	(786) 812-3293	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
23	luisa73@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Carli Ernser	1993-11-03	F	64562 Dewayne Vista Suite 607\nDevenshire, DE 09560	Ziemannberg	(336) 757-7253	678-380-6112	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
24	cecil.schneider@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Maximo Dibbert	1993-10-20	F	708 Braun Plain\nSouth Sylvia, RI 18988	North Leola	+1 (678) 765-0316	(508) 254-6371	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
25	cloyd.dibbert@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Dr. Teresa Becker	2021-04-07	F	724 Leon Pike Suite 642\nSmithamstad, OK 20616	Lake Broderickburgh	509.933.0038	754-992-5142	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
26	mariela35@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Vilma Koepp	2016-04-23	M	9259 Feest Passage Suite 282\nDenesikborough, SD 49725	Marianofort	+1-239-942-2693	+1 (989) 359-9990	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
27	roscoe29@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Prof. Clifton McKenzie II	1988-11-08	F	8281 Guadalupe Turnpike Suite 518\nNorth Giovannaburgh, TN 53687-4278	Sadyeland	712.964.2044	(541) 654-6422	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
28	aklein@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Prof. Lessie Zulauf	1970-07-18	F	9964 Shields Underpass Suite 658\nNew Bethanyton, UT 93435	New Kathrynton	+1 (743) 295-0215	+1 (260) 469-4739	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
29	anne.marquardt@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Garland Bartoletti	2004-09-06	F	1241 Trystan Island\nWest Tobin, AR 79303	Teresahaven	+1 (906) 507-3767	+1-614-863-5298	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
30	spouros@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Ewald Runolfsson	1982-09-16	M	1173 Gilbert Junction Suite 968\nMarvinton, DC 39399-1414	Ethantown	+1.518.547.0422	+1-276-228-1258	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
31	dorothea29@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Ian Hauck	1974-06-06	F	8107 McKenzie Locks\nBayertown, OR 88587	Pfannerstillstad	+1.406.716.0995	931-803-5538	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
32	humberto.wiza@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Ismael Abbott	2011-01-10	F	998 Porter Mission\nNorth Ettieshire, IN 31618-8750	South Americobury	985-890-2414	+1-248-816-2005	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
33	rhyatt@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Armando Hauck	1971-12-10	F	663 Constantin Plaza\nEast Justinastad, FL 54101-2042	Port Freedahaven	(516) 687-2793	(423) 410-3895	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
34	bosco.fatima@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Aiden Luettgen PhD	2009-01-03	F	49497 Bernier Ridge Apt. 961\nHermanbury, IL 66440-3236	Ziemannmouth	864.853.0373	(360) 770-1734	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
35	orn.jaleel@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Domenick Konopelski	2016-03-30	F	687 Shany Shoals\nLarkinhaven, GA 82102	Nettiestad	(570) 500-8847	+1 (352) 528-9844	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
36	alex.predovic@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Dr. Florencio Bode V	1985-10-03	M	98042 Garnet Flats Apt. 684\nEast Mathewport, MD 73379-0291	Blairchester	872-410-1779	351.784.2252	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
37	adam.luettgen@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Brook Schowalter	2014-08-27	M	18579 Cormier Street\nFlaviostad, IL 97881	Melisatown	+13342898688	(862) 989-3659	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
38	lubowitz.jeramy@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Amiya Beahan	1970-06-13	M	543 Hintz Rapid Suite 512\nWest Kitty, LA 96165	Urbanside	(408) 282-0555	217.498.7983	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
39	uschmitt@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Darrin Paucek	1989-10-20	F	92260 Mckayla Garden Apt. 810\nNew Garfield, NH 75307	Skileschester	930-480-9560	+14349840495	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
40	okon.velma@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Alexandria Nienow Jr.	1991-02-23	M	689 Kayla Mills Apt. 232\nO'Keefeburgh, UT 27857-8356	Wolffbury	930.664.6180	+1.608.942.5066	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
41	ocie16@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Darrick Corkery	2012-11-20	F	25515 Hand Ways Apt. 508\nEast Seamusfort, ND 14493	Mayermouth	+1-208-512-7961	+17576363461	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
42	matteo92@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Isaiah Mills	1985-05-12	F	824 Littel Port Suite 016\nWest Vickie, MO 06873	North Kaylee	1-305-767-7851	+1 (706) 279-8615	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
43	zieme.carolanne@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Aubrey Davis	2013-12-17	M	41236 Thaddeus Prairie Apt. 955\nWest Vilma, AK 38568-2799	West Jordyn	941-278-6038	(959) 486-3695	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
44	okshlerin@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Lydia Stark	2017-02-23	F	9739 Hugh Glens Apt. 459\nVeronicaside, OH 83657	Rileyville	408-559-6920	1-516-495-4855	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
45	wiley.hartmann@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Celine Cronin	2007-10-02	M	835 Myrtle Stravenue Apt. 589\nToyland, AZ 53149	Port Liana	+1 (215) 258-3359	(475) 214-0840	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
46	fritsch.alessandra@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Novella Cormier	1994-03-26	F	247 Cale Ferry Apt. 161\nPort Lempi, IA 24312	Priceside	713-396-2648	440-275-4650	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
47	lynch.kassandra@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Russ Harris	1971-01-24	F	99216 Ayana Greens\nNew Jewellstad, PA 32897-3662	Donatoberg	+1 (949) 278-6670	858-628-3697	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
48	sauer.otha@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Warren Douglas	2007-01-04	M	4096 Chase Harbors Suite 917\nSouth Jilliantown, MA 03379	East Fabianport	(319) 685-7307	469.837.6708	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
49	awaelchi@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Ardith Bahringer	2011-12-13	F	24990 Landen Lakes Suite 163\nEmmerichville, AK 62844-4876	New Salmaburgh	+1 (732) 878-1381	+17279947205	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
50	chaya.sauer@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Elouise Fisher	1992-11-27	F	75920 Mattie Oval\nMarcoberg, NV 80724	North Oceanetown	+1.718.678.4742	430.742.3174	paciente	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
51	sandrine97@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Dariana Rippin	2007-12-01	F	6643 Mose Shoal Apt. 028\nSteuberberg, OR 75379-3824	Maraview	330.923.1473	+1-937-565-7418	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
52	bkilback@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Clair Feil DVM	1978-11-05	M	54381 Abdullah Club\nSchroederfurt, MN 68687-8642	Metztown	+14246877491	+1.769.315.5690	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
53	leilani.wiegand@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Isabelle Glover Sr.	1971-02-13	F	176 Miller Lock Apt. 347\nJennieberg, MI 08910	Port Violaberg	+1-269-492-9868	1-802-551-2296	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
54	abernathy.catherine@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Duncan Nitzsche II	2007-10-31	F	4141 Edmund Centers Suite 771\nSouth Rozella, SC 78312-7806	Lake Shirley	1-541-981-4115	(541) 318-8879	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
55	juwan23@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Dr. Miller Cartwright V	2007-11-08	M	484 Gleason Field\nJaedenside, TX 72014	Cassandreside	+18324323705	207.781.0310	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
56	dewayne49@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Mr. Michel Shields V	2013-08-13	M	2767 Watsica Forks Apt. 670\nNew Tobyton, CT 93385-3205	Port Jaronshire	+1.810.233.6359	+1-270-538-2278	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
57	urempel@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Dr. Favian Mitchell	2011-11-05	F	830 Eichmann Estate Apt. 037\nEast Bobby, MI 07476-2603	Brycenburgh	(631) 218-1697	+1.216.489.7810	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
58	john.gleichner@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Zella Goodwin	2024-12-25	F	674 Nader Ramp\nKirlinview, NC 08593	Millerview	+1.413.396.7115	+1.503.968.3258	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
59	virginia16@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Anahi Von	1976-11-18	F	5812 Mazie Motorway Apt. 395\nWest Margie, GA 97776-3989	Lake Cleorabury	1-305-298-8065	(786) 377-2125	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
60	general.schulist@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Garry Lesch	2013-03-23	M	6926 Anahi Canyon Apt. 702\nLake Judgebury, VA 57432-2925	Bashirianberg	1-318-644-0831	661-468-6014	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
61	maggio.curt@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Rossie Weissnat	1975-07-07	M	2547 Maximilian Vista Suite 326\nEmmitttown, OK 33642	Port Cristobal	+18642875234	510-753-5525	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
62	hlittel@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Justus Bayer	2002-06-26	F	6203 Ansley Knolls\nNew Marco, KY 06712-4526	Arnemouth	571-500-4929	1-361-490-3392	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
63	veronica.frami@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Mr. Carlo Kassulke III	1972-11-25	M	5950 Pauline View Apt. 965\nAudreanneburgh, PA 41124	Cynthiafurt	951.952.8475	+19566249779	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
64	hipolito.volkman@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Miss Kathlyn Swift DVM	1996-05-25	F	69202 Garrett Mountains Apt. 865\nPort Deonte, WY 43758-0034	Nitzscheview	1-754-237-1116	(986) 259-1545	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
65	krajcik.patience@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Jesse Stroman	2003-01-22	M	6391 Donna Drive Suite 513\nKoeppstad, MD 69073-8533	Reannaview	1-925-628-0686	+16622465655	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
66	lawson.kozey@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Jazlyn Hodkiewicz	1986-11-17	M	84727 Elnora Mountain Suite 162\nAlisonmouth, MO 50833-8977	Christburgh	1-737-379-7745	(972) 617-3153	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
67	ljerde@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Prof. Jerad Littel DDS	1993-12-31	F	88193 Willms Avenue\nEast Green, NC 52857	Alannachester	(406) 671-4909	1-571-653-6131	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
68	clarabelle03@example.com	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Prof. Chesley Hansen DDS	1986-02-10	F	32885 Beier Passage\nO'Connellview, DC 95405	Lake Ahmadville	+14844917568	(731) 975-7363	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
69	rosemary.wisoky@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Dr. Reva Beer	2025-01-04	M	84227 Maci Pass Apt. 329\nCronafort, SC 42752-9961	West Joannieton	+1-254-831-6511	+1-463-462-6295	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
70	ferry.thaddeus@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Miss Alda Bradtke	1976-09-03	F	84590 Goldner Islands Apt. 807\nChristymouth, WI 77400-7521	Antwonside	458.786.0058	+16169708565	profissional	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
71	goodwin.sibyl@example.org	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Anya Johnson III	2010-01-09	M	8740 O'Conner Terrace Apt. 937\nNew Della, MI 46421-9007	Port Princeborough	(984) 609-6345	+1.845.204.8646	administrador	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
72	dickinson.mabelle@example.net	2025-07-15 12:46:46	$2y$12$xW/L6cnyUON.Ar7qf3SNqeSY7FxXQKd4lo6Q4oCcNS.4FLIeCh7ZG	Arlie O'Keefe	1999-05-17	F	1669 Pouros Parkway Suite 764\nEast Eldred, NV 78363-3446	Manteshire	(623) 763-7949	+1.281.798.7374	administrador	\N	2025-07-15 12:46:46	2025-07-15 12:46:46
73	example@example.com	\N	$2y$12$5PRLYP02Ruw9Ysll2zAWC.7SOblA1Z9vChejSMPFFdYUlfuRCLjAu	John Doe	1990-01-01	M	123 Main St, City, Country	São Paulo	5511999999999	551134567890	administrador	\N	2025-07-15 12:57:01	2025-07-15 12:57:01
\.


--
-- TOC entry 3526 (class 0 OID 0)
-- Dependencies: 229
-- Name: consultas_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.consultas_id_seq', 57, true);


--
-- TOC entry 3527 (class 0 OID 0)
-- Dependencies: 235
-- Name: dispensas_educacao_fisica_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.dispensas_educacao_fisica_id_seq', 5, true);


--
-- TOC entry 3528 (class 0 OID 0)
-- Dependencies: 225
-- Name: failed_jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.failed_jobs_id_seq', 1, false);


--
-- TOC entry 3529 (class 0 OID 0)
-- Dependencies: 233
-- Name: horarios_profissionais_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.horarios_profissionais_id_seq', 21, true);


--
-- TOC entry 3530 (class 0 OID 0)
-- Dependencies: 222
-- Name: jobs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jobs_id_seq', 1, false);


--
-- TOC entry 3531 (class 0 OID 0)
-- Dependencies: 214
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.migrations_id_seq', 11, true);


--
-- TOC entry 3532 (class 0 OID 0)
-- Dependencies: 237
-- Name: personal_access_tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.personal_access_tokens_id_seq', 1, false);


--
-- TOC entry 3533 (class 0 OID 0)
-- Dependencies: 216
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 73, true);


-- Completed on 2025-07-15 11:04:14

--
-- PostgreSQL database dump complete
--

