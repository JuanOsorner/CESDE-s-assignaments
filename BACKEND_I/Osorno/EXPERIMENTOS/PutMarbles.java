//Vamos a abusar de la clase Math y Random
import java.util.Random;
public class PutMarbles extends Marbles{
    Random rm = new Random();
    public PutMarbles(){}
    private int[] vector(int[] V, int x, int y){
        int size = Math.abs(x-y)+1;
        int[] W = new int[size];
        int a = Math.max(x,y);
        while(Math.min(x,y)!=a){
            W[size-1] = V[a];
            a--;
            size--;
        }
        if(x==y){
            W[0] = a;
        }
        return W;
    }
    private boolean yesnot(int[] V1, int x1, int y1){
        boolean status = false;
        for(int j = 0; j<V1.length-1;j++){
            if(V1[j]!=Math.min(x1,y1)&&V1[j+1]!=Math.max(x1,y1)){
                V1[j] = Math.min(x1,y1);
                V1[j+1] = Math.max(x1,y1);
                status = true;
                break;
            }
        }
        return status;
    }
    @Override
    public long putMarbles(int[] weight, int k){
        int[] U = new int[2*k];
        int i = 1, sum=0;
        long score = 0;
        if(weight.length == 0){
            score = -1;
        }else{
            while (i!=k){
                int num1 = rm.nextInt(weight.length);
                int num2 = rm.nextInt(weight.length);
                boolean sta = yesnot(U,num1,num2);
                if(sta){
                    int max = vector(weight,num1,num2).length;
                    sum = vector(weight,num1,num2)[0] + vector(weight,num1,num2)[max-1];
                    i++;
                }
                score = score + sum;
            }
        }
        return score;
    }
}
