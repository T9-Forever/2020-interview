```
new Promise(function(resolve, reject) {})
```
* 构建Promise对象时，需要传入一个executor函数，主要业务流程都在executor函数中执行  
* Promise构造函数执行时立即调用executor函数，resolve和reject两个函数作为参数传递给executor,resolve和reject函数被调用时，分别将promise的状态改为fulfiled(完成)或rejected(失败)。  
**一旦状态改变，就不会再变**，任何时候都可以得到这个结果。  
* 在executor函数中调用resolver函数后，会触发promise.then设置的回调函数；而调用reject函数后，会触发promise.catch设置的回调函数  

**Promise是用来管理异步编程的，它本身不是异步**  

**Promise对象的错误具有冒泡特性，会一直向后传递**  

tip:  
new Promise出来的实例，成功或失败，取决于executor函数执行的时候，**执行的是resolve还是reject决定的，或executor函数执行发生异常错误**  

`.then`或`.catch`返回的新实例的状态，决定下一个then中哪一个方法会被执行，有一下几种情况：  
* 不论是成功的方法执行，还是失败的方法执行（then中的两个方法），凡是执行抛出了异常，则会把实例的状态改为失败。  
* 方法分中如果返回一个新的Promsie实例（比如上例中的Promise.reject(1)）,返回这个实例的结果是成功还是失败，也决定了当前实例是成功还是失败。  
* 剩下的情况基本上都是让实例变为成功的状态，上一个then方法返回的结果会传递到下一个then的方法中。  


### 常用的方法
1. Promise.resolve  
* 参数是一个Promise实例  
* 参数不是具有then方法的对象，或基本属性  
* 不带有任何参数  
* 参数是一个thenable对象  
