```mermaid
classDiagram
    web <|-- converter
    web <|-- api
    class api{
        +String BEARER_KEY
        +query_api(path: String, headers: Dictionary): int, tuple
        +get_user(): int, tuple
        +get_syllabi(): int, tuple
        +get_syllabus(s_id: int): int, tuple
    }
    class converter{
        +createCalendar(events)
        +createICSFile(calendar)
    }
    class web{
        +cached(f, ttl=60)
        +expensive()
        +_f()
        +filterDate(x, d1, d2)
        +date(value, format="%Y-%m-%d")
        +index()
        +syllabus_detail(syl_id)
        +download_ics(syl_id)
        +main()
        +Flask app
    }
```
