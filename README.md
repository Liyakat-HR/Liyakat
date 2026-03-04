# Liyakat

## Branch Stratejisi / Branch Strategy

Bu repo aşağıdaki dal yapısını kullanır:

| Dal / Branch | Açıklama / Description |
|---|---|
| `main` | **Korumalı / Protected** – Üretim ortamı. Sadece `development` veya `hotfix/*` dallarından PR kabul eder. |
| `development` | Aktif geliştirme dalı. Tüm özellik dalları buradan açılır ve buraya birleştirilir. |
| `feature/*` | Yeni özellikler için `development` üzerinden açılır. |
| `hotfix/*` | Acil düzeltmeler için doğrudan `main` üzerinden açılır. |

### Kurallar / Rules

- `main` dalı korumalıdır; doğrudan `git push` yapılamaz.
- `main`'e sadece `development` veya `hotfix/*` dalından PR açılabilir.
- Geliştirme çalışmaları `development` dalı üzerinden yürütülür.