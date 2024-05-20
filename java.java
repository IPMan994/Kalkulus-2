public class DoubleIntegral {
    public static void main(String[] args) {
        // Define the function to integrate
        Function2D function = (x, y) -> x * y;

        // Define the limits of integration
        double a = 0;
        double b = 1;
        double c = 0;
        double d = 1;

        // Define the number of intervals for the numerical integration
        int n = 100;

        // Calculate the double integral using the midpoint rule
        double integral = midpointRule(function, a, b, c, d, n);

        System.out.println("The double integral is: " + integral);
    }

    public static double midpointRule(Function2D function, double a, double b, double c, double d, int n) {
        double hx = (b - a) / n;
        double hy = (d - c) / n;

        double sum = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                double x = a + (i + 0.5) * hx;
                double y = c + (j + 0.5) * hy;
                sum += function.apply(x, y) * hx * hy;
            }
        }

        return sum;
    }

    @FunctionalInterface
    public interface Function2D {
        double apply(double x, double y);
    }
}