public abstract class Marbles {
    private int k;
    private int[] weights;
    public Marbles(){
    }
    public int getK() {
        return k;
    }
    public void setK(int k) {
        this.k = k;
    }
    public int[] getWeights() {
        return weights;
    }
    public void setWeights(int[] weights) {
        this.weights = weights;
    }
    //LOS METODOS ABSTRACTOS VAN CON LA PALABRA ABSTRACT
    public abstract long putMarbles(int[] weights,int k);
}

