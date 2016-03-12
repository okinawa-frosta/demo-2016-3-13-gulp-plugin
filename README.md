# Gulpプラグインの基本構成とテスト

```
var plugin = require('plugin');

gulp.src('./*.html')
  .pipe(plugin())
  .pipe(gulp.dest('./dest'));
```
