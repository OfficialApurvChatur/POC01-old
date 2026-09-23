# POC #01 - React Node Setup

## System Architecture

### 01. High Level Design (HLD)

### 02. Low Level Design (LLD)

### 02.01. Git Branching & PR Strategies LLD
```mermaid
  sequenceDiagram
    actor Developer
    participant feature/*
    participant develop
    participant test
    participant stage
    participant prod

    Developer -->> develop : switch
    develop -->> feature/* : create
    feature/* -->> feature/* : push
    feature/* -->> develop : merge
    develop -->> test : merge
    test -->> stage : merge
    stage -->> prod : merge
    prod -->> develop : merge
    develop -->> Developer : pull
```

### 02.02. Project Overview LLD
```mermaid
  flowchart LR
    User(("User"))
    subgraph Testing["Testing"]
      subgraph Frontend["Frontend"]
        React["React"]
      end
      subgraph Backend["Backend"]
        Node["Node"]
      end
    end
    
    User --> Frontend
    Frontend --> Backend
```

### 02.03. Playwright Connection LLD
```mermaid
  flowchart
    Developer(("Developer"))
    Tester(("Tester"))
    Github["Github Actions"]
    CLI["Command Line Interface"]
    subgraph Testing["Testing"]
      Playwright[""Playwright]
    end
    Frontend["Frontend"]
    Backend["Backend"]

    Developer --> CLI
    Tester --> Github
    
    CLI --> Testing
    Github --> Testing

    Testing --> Frontend
    Testing --> Backend

```

### 02.04. Environment Connection LLD
```mermaid
  flowchart TB
    User(("User"))
    subgraph Environment["Environment"]
      develop["develop"]
      test["test"]
      stage["stage"]
      prod["prod"]
    end
    subgraph Project["Project"]
      direction TB
      Frontend["Frontend"]
      Backend["Backend"]
      Testing["Testing"]
    end

    User --> develop
    User --> test
    User --> stage
    User --> prod
    develop --> Project
    test --> Project
    stage --> Project
    prod --> Project
```

## Servers & DNS

### Backend
- Development
  - Local: [http://localhost:8001](http://localhost:8001)
  - Live: []()
- Testing
  - Local: [http://localhost:8002](http://localhost:8000)
  - Live: []()
- Staging
  - Local: [http://localhost:8003](http://localhost:8000)
  - Live: []()
- Production
  - Local: [http://localhost:8004](http://localhost:8000)
  - Live: []()

### Frontend
- Development
  - Local: [http://localhost:3001](http://localhost:3001)
  - Live: []()
- Testing
  - Local: [http://localhost:3002](http://localhost:3002)
  - Live: []()
- Staging
  - Local: [http://localhost:3003](http://localhost:3003)
  - Live: []()
- Production
  - Local: [http://localhost:3004](http://localhost:3004)
  - Live: []()

### Testing
- Local Report: [http://localhost:9323](http://localhost:9323)
- Live Report: []()
