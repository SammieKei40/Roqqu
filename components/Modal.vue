<template v-slot:body>
  <div style="justify-content: center; background-color: red">
          
              <div  class="ui scrolling modal transition visible active">
                <i @click="close" aria-hidden="true" class="close icon"></i>
            <div  class="header" style="font-size: 15px;">What would you like to do?</div>
            <div class="image content">
                <div class="description">
                    <div class="ui stackable grid">
                        <div class="ui eight wide column"><nuxt-link to="/Wallet/buy">
                                <div class="ui card w-100 choose-token">
                                    <div class="content">
                                        <div class="center aligned" style="margin: 20px;"><img src="data:image/png;base64,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"></div>
                                        <div class="center aligned f-20 pb-10 font-bold">Instant Buy</div>
                                        <div class="center aligned description pb-10">
                                            <p>Buy and hold digital currencies</p>
                                        </div>
                                    </div>
                                </div>
                            </nuxt-link></div>
                        <div class="ui eight wide column"><nuxt-link to="/Wallet/sell">
                                <div class="ui card w-100 choose-token">
                                    <div class="content">
                                        <div class="center aligned" style="margin: 20px;"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAACE1BMVEVHcEz/xQD//wD/vwBUoFb/wwD/wwBcpWBlqWY5jjz/xAD/xQD/xwD/xQD/xAD/wwD/xAD/xQD/yQD/xAD/xgD/xAD/xAD/xAD/qgD/vwD/yAD/xQD/xQD/xAD/xAD/xAD/xAD/xAD/xAD/wwD/wwD/xQD/xAD/wgD/xAD/xAD/xAA5jTz/xAD/xAD/wwD/uQD/xQBmrWs3jTs4jTxQnlNWoFl+rlZ9r1al1qc4jjz/xABcpV9Kmk5usnE3jjyptjk5jz07kD+h06Oj1aWWzJek1aZZpFw5jj1apV5lrGl0tXc6jz5rsW9KmU2i1KRpr2xbpV9BlEWi06Sc0J5cpmBJmk2g06J6un5mrWp5uXyb0J1ssG88kEFElkmg0qFElkik1qZnrGlvs3KIw4o9kkKLxY17un1OnFKKxI2Hwoqf0qFSn1ae0aGYzpuMxY5ClEZOnFM9kUA8kUBDlkeOx5GNxo9fp2Ncpl5Zo1ug06OHwolXoltnrWpRn1Waz52WzJlormtOnVF2tnhBlERNnFGKxIx9u39UoViEwIaUy5djq2Zws3NiqmZ6uX1gqGOTyZSCv4SFwIdqr21dpmCLxY5hqmRxtHRkq2dys3RImU1rsG5Rn1SSyZV4uHtQnlRElUeMxY9VoFc9kUFgqGJSn1WNx5BFlkiAvoNztXZYpFxToFdOnFF3t3l3uHuc0J+d0Z9NnFAaeFA2AAAAOHRSTlMAPgEM4xFAwI6r5TAgFsrF7q8T4gnx10EDBBwsndtF+f2Fo29VT2g/hvf8VbW0TQtLZDiApXaqqZNNbboAAALwSURBVGje7Zr3V1MxFMcrdeDCLeJWHCjuLUjt6wQ6oLTQFmiLMhURkOECce+99977T5QObLE3yT3p7VE87/tbzrs3n/OSfG+S12o0qlSpUjWClTmOWFs25ydBRu8k1/i/BdHRInQCSHOhtJrRkPId0ipGQ07JQ86iIZ/lIa1oSBmnF2dbm5PzuAwL0d9g9OD2fnKFA1yWJjcj5KkeCbkN51eX2OILVPG5Ba+i45rRZwazr70e7oOGJjDMXCJw/M+A0uVpBHONvmS79RnB0BZPlxL4woQUMeezrhcy9XX2AiiSgNyHS8dHSshBPQzR9xBC+llVsJUOcpFda2+RQYrZkMIUIFWlFkvp0VijopMNaXBCGSjIicpwB47qaKuetzfVQxkoSGx8DkdbXh7kNJSBgRyIrVjb/khzLw/yGMrAQExDPZgizZM8SB+UgYEYDkUzaisizYc8iB3KQM1JrJLuibbO8yDPoAwUxHA8nHHEECsqPMhLKANpxmM19n2/t4gzbIbLDGXIOP4eG3KVrKz0WFkMazddFS5nQe4QlvpLtTCj00S5M94EB8z6QWZnDA78YCSBpeUKI/j7QJANCQ1WIMc3+Azit/2JULzwuearY3BfDgkuQReqwOTGR8MZlXfBsOAr3CXIAw+C0f8ijnjvNwoWoujA3cIYa/O7mv52RWl/a++uY4ScQ5/qH8hfHS6jIU/kIc/RkA55SAca8kYe0ouGhHZJK4CGpPEe/7989tiYKdT23QnaJoremr9J5mvVqIIEjU3TJzEVokJUiAoZKRDtmLg2JELWJTzQpghZuapAqEULU32V5atFjMXLUh+wFSJILsW05PEZS0jmPmM+j7E0g2aFzZnGZqzJoVrHM6ewGFlaOrdMnw0zFkymNPvcGRBjwiTakjJvajJj1kTqwpVs/dSNLrY+hdGF1s/VpEV59EbnW5/K6Dzrr83RpE1D1s9an87fuqPWpzU6bH1qo0PWpzd6srKz1X9IqPqH9AuS5eTQFaxKHQAAAABJRU5ErkJggg=="></div>
                                        <div class="center aligned f-20 pb-10 font-bold">Instant Sell</div>
                                        <div class="center aligned description pb-10">
                                            <p>Sell your digital currencies for fiat</p>
                                        </div>
                                    </div>
                                </div>
                            </nuxt-link></div>
                    </div>
                </div>
            </div>
        </div>
  </div>
      

</template>

<script>
  export default {
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>