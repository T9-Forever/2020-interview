function makeePrime() {
  const MAX_PRIME = 10000;
  const MAX_PRIME_ACCO = 1000+500;
  let is_prime = Array(MAX_PRIME), prime = Array(MAX_PRIME_ACCO), nprime = 0;

  let i, j;
  for(i=2; i< MAX_PRIME;i+=1) {
    is_prime[i] = 1;
  };
  for(i=2;i<MAX_PRIME;i+=1) {
    if(is_prime[i])prime[nprime++] = i;
    for(j=0;j<nprime;j++) {
      if(i*prime[j] >= MAX_PRIME)break;
      else {
        is_prime[i*prime[j]] = 0;
        if(!(i%prime[j]))break;
      }
    }
  }
  for(i=0;i<nprime;i++) {
    console.log(prime[i]);
  }
}

makeePrime();