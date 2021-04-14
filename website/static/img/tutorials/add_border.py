import numpy
import skimage.io
import sys

fnames = sys.argv[1:]

for fname in fnames:
    print(fname)
    im = skimage.io.imread(fname)
    im2 = numpy.zeros((im.shape[0]+4, im.shape[1]+4, 3), dtype='uint8')
    im2[2:-2, 2:-2, :] = im
    im2[0:2, :, :] = 0
    im2[-2:, :, :] = 0
    im2[:, 0:2, :] = 0
    im2[:, -2:, :] = 0
    skimage.io.imsave(fname, im2)
