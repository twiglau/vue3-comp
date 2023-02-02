
# setup 中 provide 和 inject 使用
```
import { provide } from 'vue';
export default {
    components: { HomeM },
    data() {
        return {
            message: "呵呵🙂"
        }
    },
    setup() {
        const name = "cWHy";
        let counter = 99;
        provide("name", name);
        provide("counter", counter)
    }
}
```  
```
const name = inject("name", "lau");
const counter = inject("counter", 0);
return {
    name,
    counter
}
```  